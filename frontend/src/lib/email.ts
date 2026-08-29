import nodemailer from 'nodemailer';

// Konfigurasi transporter email
// Secara default menggunakan SMTP Gmail. Pastikan variabel lingkungan sudah diatur.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_EMAIL || '',
    pass: process.env.SMTP_PASSWORD || '', // Gunakan App Password jika 2FA aktif
  },
});

export interface WelcomeEmailOptions {
  to: string;
  name: string;
  role: string;
  isGoogleOnly: boolean;
  password?: string;
}

/**
 * Mengirim email selamat datang dan instruksi login kepada admin baru.
 */
export async function sendWelcomeEmail({ to, name, role, isGoogleOnly, password }: WelcomeEmailOptions) {
  // Jika email/password belum di-set di environment, skip pengiriman agar aplikasi tidak crash
  if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
    console.warn('⚠️ SMTP_EMAIL atau SMTP_PASSWORD belum diatur. Melewati pengiriman email.');
    return;
  }

  const roleName = role === 'SuperAdmin' ? 'Super Admin' : role === 'AdminHumas' ? 'Admin Humas' : 'Admin PPDB';
  const loginUrl = process.env.NEXT_PUBLIC_APP_URL ? `${process.env.NEXT_PUBLIC_APP_URL}/admin/login` : 'http://localhost:3000/admin/login';

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px; background-color: #ffffff;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="color: #059669; margin: 0;">Profil Sekolah</h2>
        <p style="color: #64748b; margin-top: 5px;">Pemberitahuan Akun Admin</p>
      </div>
      
      <p style="color: #334155; font-size: 16px;">Halo <strong>${name}</strong>,</p>
      <p style="color: #334155; line-height: 1.6;">
        Selamat! Akun Anda telah berhasil didaftarkan sebagai <strong>${roleName}</strong> di sistem manajemen Profil Sekolah.
      </p>

      <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #e2e8f0;">
        <h3 style="margin-top: 0; color: #0f172a; font-size: 15px;">Informasi Akses Anda:</h3>
        <ul style="color: #334155; padding-left: 20px; margin-bottom: 0;">
          <li><strong>Email:</strong> ${to}</li>
          ${isGoogleOnly 
            ? '<li><strong>Metode Login:</strong> Masuk dengan akun Google (SSO)</li>' 
            : `<li><strong>Kata Sandi Sementara:</strong> ${password}</li>`
          }
        </ul>
      </div>

      <h3 style="color: #0f172a; font-size: 15px; margin-top: 25px;">Cara Masuk ke Dashboard:</h3>
      <ol style="color: #334155; line-height: 1.6;">
        <li>Buka halaman login melalui tombol di bawah ini.</li>
        ${isGoogleOnly 
          ? '<li>Klik tombol <strong>"Masuk dengan Google"</strong> dan pilih akun Gmail Anda ini.</li>' 
          : '<li>Masukkan email dan kata sandi sementara Anda di atas, atau gunakan tombol <strong>"Masuk dengan Google"</strong> jika Anda memiliki akun Google.</li>'
        }
      </ol>

      <div style="text-align: center; margin: 30px 0;">
        <a href="${loginUrl}" style="background-color: #059669; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Masuk ke Dashboard</a>
      </div>

      ${!isGoogleOnly ? '<p style="color: #ef4444; font-size: 13px;"><em>*Penting: Demi keamanan, segera ubah kata sandi sementara Anda setelah berhasil masuk.</em></p>' : ''}
      
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0 20px;" />
      <p style="color: #94a3b8; font-size: 12px; text-align: center; margin: 0;">
        Email ini dikirim secara otomatis oleh sistem. Harap tidak membalas email ini.
      </p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Sistem Admin Sekolah" <${process.env.SMTP_EMAIL}>`,
      to,
      subject: 'Selamat Datang - Akun Admin Profil Sekolah',
      html: htmlContent,
    });
    console.log(`Email sent successfully to ${to}`);
  } catch (error) {
    console.error('Error sending welcome email:', error);
    // Tidak melempar error agar proses utama (pembuatan user) tidak gagal
  }
}
