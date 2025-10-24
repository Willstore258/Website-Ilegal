document.addEventListener('DOMContentLoaded', ()=>{
  const menuButtons=document.querySelectorAll('.menu-btn');
  const quranSection=document.getElementById('quran-section');
  const niatSection=document.getElementById('niat-section');
  const clockSection=document.getElementById('clock-section');
  const panels=[quranSection,niatSection,clockSection];
  const niatTitle=document.getElementById('niat-title');
  const niatContent=document.getElementById('niat-content');
  const juzList=document.getElementById('juz-list');
  const modal=document.getElementById('modal');
  const modalTitle=document.getElementById('modal-title');
  const modalBody=document.getElementById('modal-body');
  const closeModal=document.getElementById('close-modal');

  const niatData={
    'niat-puasa':{
      title:'Niat Puasa Ramadhan',
      text:'نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ لِلَّهِ تَعَالَى\n\nIndonesian: Saya niat puasa esok hari karena Allah Ta\'ala.'
    },
    'niat-tarawih':{
      title:'Niat Sholat Tarawih',
      text:'نَوَيْتُ أَنْ أُصَلِّيَ سُنَّةَ التَّرَاوِيحِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى\n\nIndonesian: Saya niat sholat Tarawih karena Allah Ta\'ala.'
    },
    'niat-witir':{
      title:'Niat Sholat Witir 1 & 2 Rakaat',
      text:'نَوَيْتُ أَنْ أُصَلِّيَ وَتِرًا رَكْعَةً أَوْ رَكْعَتَيْنِ لِلَّهِ تَعَالَى\n\nIndonesian: Saya niat sholat Witir 1 atau 2 rakaat karena Allah Ta\'ala.'
    }
  };

  for(let i=1;i<=30;i++){
    const btn=document.createElement('button');
    btn.className='juz-item';
    btn.textContent='Juz '+i;
    btn.addEventListener('click',()=>openJuz(i));
    juzList.appendChild(btn);
  }

  const juzExamples={
    1:{title:'Juz 1 - Al-Fatihah & Al-Baqarah (awal)',ayat:`Contoh ayat:\nبِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ\nالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ\n\nArtinya: Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.`},
    30:{title:'Juz 30 - Juz Amma',ayat:`Contoh ayat:\nإِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ\n\nArtinya: Apabila telah datang pertolongan Allah dan kemenangan.`}
  };

  function openJuz(n){
    const data=juzExamples[n]||{title:'Juz '+n,ayat:'Ayat untuk juz ini belum diisi (placeholder).'};
    modalTitle.textContent=data.title;
    modalBody.textContent=data.ayat;
    modal.classList.remove('hidden');
  }
  closeModal.addEventListener('click',()=>modal.classList.add('hidden'));
  modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.add('hidden')});

  menuButtons.forEach(btn=>{
    btn.addEventListener('click',()=>{
      panels.forEach(p=>p.classList.add('hidden'));
      const action=btn.dataset.action;
      if(action==='quran')quranSection.classList.remove('hidden');
      else if(action.startsWith('niat')){
        niatSection.classList.remove('hidden');
        const d=niatData[action];
        niatTitle.textContent=d.title;
        niatContent.textContent=d.text;
      }else if(action==='clock')clockSection.classList.remove('hidden');
      window.scrollTo({top:0,behavior:'smooth'});
    });
  });

  function updateClock(){
    const el=document.getElementById('clock');
    const now=new Date();
    const hh=String(now.getHours()).padStart(2,'0');
    const mm=String(now.getMinutes()).padStart(2,'0');
    const ss=String(now.getSeconds()).padStart(2,'0');
    el.textContent=hh+':'+mm+':'+ss;
  }
  setInterval(updateClock,1000);
  updateClock();
});
