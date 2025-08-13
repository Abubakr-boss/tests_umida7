const questions=[

{q:"Overturizm natijasi keltirilgan variantni tanlang?",opts:["Turistlar ustidan to‘liq nazorat o‘rnatish va tizimli yondashuv olib borish","Turistlar haddan tashqari ko‘pligi sababli mahalliy aholining hayot sifati yomonlashishi","Turistlar sonining yetishmasligi va uni bartaraf etish usullari","Ekoturizmda haddan ortiq to‘planish holati va uni cheklash bo‘yicha chora-tadbirlar"],a:"B"},
{q:"Community Based Tourism – CBT nimani anglatadi?",opts:["Yirik mehmonxona brendlariga asoslangan turizm rivoji","Mahalliy jamoalarni iqtisodiy va madaniy jihatdan mustahkamlovchi turizm shakli","Ichki turizm va mahalla a’zolari uchun mo‘ljallangan turizm","Etnografik turizmni rivojlantirish uchun shaharda tashkil etilgan sayohatlar"],a:"B"},
{q:"Nega jamoat transportidan foydalanish muhim hisoblanadi?",opts:["Narx-navo jihatidan ancha arzon bo‘lganligi uchun","Sayohat vaqtida karbon izi (CO₂ emissiyasi)ni kamaytiradi","Avtomobil tirbandliklarini kamaytiradi","Sayohat manzillariga tez yetib borish imkonini beradi"],a:"B"},
{q:"Turizm madaniy merosni qanday saqlab qolishga yordam beradi?",opts:["Tarixiy obidalarni dunyoga tanitish va xalqaro bozorda o‘z maqomga ega bo‘lish orqali","Turistlar jalb etilib, ularning sarflaridan tushgan daromad evaziga restavratsiya ishlarini moliyalashtirish","Turistlarga ma’lum bir turistik destinatsiyalarga kirishni taqiqlash orqali","Ma’rifiy-madaniy faoliyat orqali merosni saqlab qolish imkonini beradi"],a:"B"},
{q:"Texnologiyalar barqaror turizmga qanday hissa qo‘shadi?",opts:["Ijtimoiy tarmoqlarda turistik kontentni rivojlantirish orqali","Ekologik ko‘rsatkichlarni monitoring qilish va aqlli boshqaruv yechimlarini qo‘llash orqali","Turistlarga Wi-Fi taqdim etish va kommunikativ jihatlarni rivojlantirish orqali","Turistik infratuzilmani sifatli va tez qurish orqali"],a:"B"},
{q:"Turizmda atrof-muhit bo‘yicha sertifikatlash nimani nazarda tutadi?",opts:["Mehmonxonalar sifati bo‘yicha ekologik standartlarga javob berish","Turistik faoliyatning ekologik standartlarga mosligini tekshirish jarayoni","Turist gidining sertifikati va unga mos faoliyatni tekshirish","Ekskursiya uchun ruxsatnomani olish majburiyati"],a:"B"},
{q:"Mehmonxonada ekologik ko‘rsatkichlarni baholashda asosiy vosita nimadan iborat?",opts:["SPA markazining mavjudligi","Atrof-muhitni boshqarish tizimi (EMS) mavjudligi","Internet reklamalari va xalqaro bozordagi ulushi","Dengiz bo‘yidagi joylashuv va sertifikat mavjudligi"],a:"B"},
{q:"Turistning karbon izi (CO₂) nima haqida ma’lumot beradi?",opts:["Me’yoridan ortiq qancha qog‘ozli xarita ishlatilganligi","Sayohat davomida chiqarilgan karbon (CO₂) miqdori","Pochtalarga yopishtirilgan yelim miqdori va ishlatilgan (CO₂) miqdori","Ovqat mahsulotlari uchun qadoqlar soni"],a:"B"},
{q:"“Yashil brending” (green branding)ning asosiy maqsadi nima?",opts:["Logoni yashil rangda qilish va uni xalqaro bozorda tanitish","Mahsulotning ekologik va ijtimoiy ustunliklarini ta’kidlash","Broshyuralar uchun yupqa qog‘ozdan foydalanish va uni tejash","Barqaror bo‘lmagan kompaniyalarni bozorda oldinga surish"],a:"B"},
{q:"Regenerativ sayohat (regenerative travel) nima?",opts:["Yuklarsiz sayohat qilish","Ekotizimni tiklashga qaratilgan sayohat shakli","Zamonaviy texnologiyalar asosida sayohat uyushtirish","2000-yillardagi eskirgan barqarorlik trendi"],a:"B"},

]

let idx = 0;
let correct = 0;
let wrong = 0;
const qnumEl = document.getElementById('qnum');
const qtextEl = document.getElementById('qtext');
const optionsEl = document.getElementById('options');
const form = document.getElementById('quizForm');
const typed = document.getElementById('typedAnswer');
const progress = document.getElementById('progress');
const resultBox = document.getElementById('resultBox');
const submitBtn = document.getElementById('submitBtn');

function renderQuestion() {
  if (idx >= questions.length) return;
  const q = questions[idx];
  qnumEl.textContent = `Savol ${idx + 1} / ${questions.length}`;
  qtextEl.textContent = q.q;
  optionsEl.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.opts.forEach((opt, i) => {
    const id = `opt${i}`;
    const div = document.createElement('label');
    div.className = 'option';
    div.innerHTML = `<input name='choice' type='radio' value='${letters[i]}' id='${id}' /><span>${letters[i]}. ${opt}</span>`;
    optionsEl.appendChild(div);
  });
  progress.textContent = `${idx + 1} / ${questions.length}`;
  typed.value = '';
}

function showResults() {
  resultBox.style.display = 'block';
  resultBox.innerHTML = `<strong>Test yakunlandi</strong><div class='small' style='margin-top:8px'>To'g'ri javoblar: ${correct}<br> Noto'g'ri javoblar: ${wrong}<br> Umumiy: ${questions.length}</div>`;
  submitBtn.disabled = true;
  form.style.display = 'none';
  progress.textContent = `${questions.length} / ${questions.length}`;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const chosenRadio = document.querySelector("input[name='choice']:checked");
  let answer = chosenRadio ? chosenRadio.value : typed.value.trim().toUpperCase();
  if (!answer || !['A', 'B', 'C', 'D'].includes(answer)) {
    alert('Iltimos A, B, C yoki D variantidan birini tanlang yoki yozing');
    return;
  }
  const correctAnswer = questions[idx].a;
  if (answer === correctAnswer) correct++; else wrong++;
  idx++;

  if (idx >= questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
});

typed.addEventListener('input', e => {
  const v = e.target.value.trim().toUpperCase();
  if (['A', 'B', 'C', 'D'].includes(v)) {
    const radio = document.querySelector(`input[value='${v}']`);
    if (radio) radio.checked = true;
  }
});

optionsEl.addEventListener('click', e => {
  const input = e.target.closest('label')?.querySelector('input');
  if (input) {
    typed.value = input.value;
  }
});

renderQuestion();
