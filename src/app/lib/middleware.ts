import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });
    const {
        data: { session }
    } = await supabase.auth.getSession();

    if (!session && req.nextUrl.pathname.startsWith('/profile')) {
        const url = req.nextUrl.clone();
        url.pathname = '/auth/login';

        return NextResponse.redirect(url);
    }

    return res;
}

export const config = {
    matcher: ['/profile/:path*']
};
