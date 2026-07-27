// Perhatikan jalur import-nya berubah karena file page.tsx sekarang ada di dalam folder 'tk'
import HeroTK from "./components/HeroTK";
import ProfilTK from "./components/ProfilTK";
import VisiMisiTK from "./components/VisiMisiTK";
import ProgramUnggulan from "./components/ProgramUnggulan";
import KurikulumTK from "./components/KurikulumTK";
import MetodePembelajaran from "./components/MetodePembelajaran";
import KegiatanTK from "./components/KegiatanTk";
import GuruTenagaPendidik from "./components/GuruTenagaPendidik";
import FasilitasTK from "./components/FasilitasTK";


export default function JenjangTK() {
  return (
    <>
      <HeroTK />
      <ProfilTK />
      <VisiMisiTK />
      <ProgramUnggulan />
      <KurikulumTK />
      <MetodePembelajaran />
      <KegiatanTK />
      <GuruTenagaPendidik/>
      <FasilitasTK/>
    </>
  );
}