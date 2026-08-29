import prisma from '@/lib/prisma';

export class PPDBSettingService {
  static async getSetting(section: string): Promise<any | null> {
    const setting = await prisma.pPDBSetting.findUnique({
      where: { section },
    });
    if (setting) {
      return JSON.parse(setting.content);
    }
    return null;
  }

  static async getAllSettings(): Promise<Record<string, any>> {
    const settings = await prisma.pPDBSetting.findMany();
    const result: Record<string, any> = {};
    settings.forEach(s => {
      result[s.section] = JSON.parse(s.content);
    });
    return result;
  }

  static async updateSetting(section: string, content: any): Promise<void> {
    const contentString = JSON.stringify(content);
    
    await prisma.pPDBSetting.upsert({
      where: { section },
      update: { content: contentString },
      create: { section, content: contentString },
    });
  }
}
