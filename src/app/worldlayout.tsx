import { redirect } from 'next/navigation';

export default function RootLayout() {
  redirect('/hi');
}

export const dynamic = 'force-dynamic';