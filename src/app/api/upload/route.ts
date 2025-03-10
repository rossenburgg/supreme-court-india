import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const title = formData.get('title') as string
    const labels = JSON.parse(formData.get('labels') as string) as string[]
    
    const fileName = `${Date.now()}-${file.name}`

    // Upload file to Supabase Storage
    const { data: fileData, error: uploadError } = await supabase.storage
      .from('documents')
      .upload(`documents/${fileName}`, file)

    if (uploadError) {
      throw uploadError
    }

    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from('documents')
      .getPublicUrl(fileData.path)

    // Store metadata in the database
    const { data: document, error: dbError } = await supabase
      .from('documents')
      .insert({
        title,
        file_url: publicUrl,
        file_name: fileName,  // Changed from file_path
        labels
      })
      .select()
      .single()

    if (dbError) {
      throw dbError
    }

    return NextResponse.json(document)
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    )
  }
}
