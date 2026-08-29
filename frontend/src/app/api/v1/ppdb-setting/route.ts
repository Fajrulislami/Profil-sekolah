import { NextRequest, NextResponse } from 'next/server';
import { PPDBSettingService } from '@/services/ppdb-setting-service';
import { getUserFromToken } from '@/utils/auth-util';
import { validatePPDBSetting } from '@/validations/ppdb-validation';
import { z } from 'zod';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const section = searchParams.get('section');

    if (section) {
      const data = await PPDBSettingService.getSetting(section);
      return NextResponse.json({ data });
    }

    const allData = await PPDBSettingService.getAllSettings();
    return NextResponse.json({ data: allData });
  } catch (error) {
    console.error('Error fetching PPDB settings:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const user = await getUserFromToken();
    if (!user || (user.role !== 'SuperAdmin' && user.role !== 'AdminPPDB')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const body = await request.json();
    const { section, content } = body;

    if (!section || !content) {
      return NextResponse.json({ error: 'Section and content are required' }, { status: 400 });
    }

    // Validate structure
    let validatedContent;
    try {
      validatedContent = validatePPDBSetting(section, content);
    } catch (validationError: any) {
      if (validationError instanceof z.ZodError) {
        return NextResponse.json(
          { error: 'Validasi gagal', details: validationError.errors },
          { status: 400 }
        );
      }
      return NextResponse.json({ error: validationError.message }, { status: 400 });
    }

    await PPDBSettingService.updateSetting(section, validatedContent);

    return NextResponse.json({ success: true, message: 'Settings updated' });
  } catch (error) {
    console.error('Error updating PPDB settings:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
