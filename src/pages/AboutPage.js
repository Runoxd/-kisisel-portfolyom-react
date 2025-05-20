
import React from 'react';
import './PageStyles.css';
import './AboutPage.css';

function AboutPage() {

    const personalInfo = {
        name: 'Muhammet Onur Özdemir',
        birthDate: '03 Ağustos 2002',
        email: 'onur4646ozdemir@gmail.com',
        phone: '+90 533 021 95 17',
        address: 'Kahramanmaraş     , Türkiye',
        nationality: 'Türk',
    };

    const cvFile = '/cv-dosyaniz.pdf';


    const hakkimdaYazisiParagraf1 = `   Balıkesir Üniversitesi Bilgisayar Mühendisliği bölümü 3. sınıf öğrencisiyim.  Web tasarım ve mobil uygulama geliştirme üzerine kendimi geliştirmek için çaba gösteriyorum. Özellikle kullanıcı dostu arayüzler ve etkileşimli deneyimler yaratmak asıl amacım`;
    const hakkimdaYazisiParagraf2 = `Hızla gelişen teknoloji dünyasına ayak uydurmak için sürekli yeni proğramları , teknolojileri ve yazılım dillerini öğrenmeye çalışmak ve kullanmak için takipte etmeye dikkat ederim , ekip çalışmaları yaparak yeni projeler  üretmeye özen gösteririm. Bana kalan zamanlarımda ise  yeni yerler görmeyi , sinemaya gitmeyi ve kamp yapmaya çaba       gösteririm `;




    return (

        <div className="page-content about-page">
            <h1>Ben Kimim?</h1> {}

            <div className="about-content-grid">
                <div className="about-text">
                    <h2>
                        Merhaba, ben <span className="highlight">{personalInfo.name}</span>.
                    </h2>
                    <p>
                        {hakkimdaYazisiParagraf1}
                    </p>
                    <p>
                        {hakkimdaYazisiParagraf2}
                    </p>
                    <ul className="personal-details">
                        {personalInfo.name && <li><strong>Ad Soyad:</strong> {personalInfo.name}</li>}
                        {personalInfo.birthDate && <li><strong>Doğum Tarihi:</strong> {personalInfo.birthDate}</li>}
                        {personalInfo.email && <li><strong>E-posta:</strong> <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></li>}
                        {personalInfo.phone && personalInfo.phone.trim() !== '' && (
                            <li><strong>Telefon:</strong> {personalInfo.phone}</li>
                        )}
                        {personalInfo.address && personalInfo.address.trim() !== '' && (
                            <li><strong>Adres:</strong> {personalInfo.address}</li>
                        )}
                        {personalInfo.nationality && personalInfo.nationality.trim() !== '' && (
                            <li><strong>Uyruk:</strong> {personalInfo.nationality}</li>
                        )}
                    </ul>
                    {cvFile && cvFile.trim() !== '' && cvFile !== '/KENDI_CV_DOSYANIZIN_ADI.pdf' && (
                        <a
                            href={process.env.PUBLIC_URL + cvFile}
                            download
                            className="btn btn-primary cv-button"
                        >
                            CV'mi İndir
                        </a>
                    )}
                </div>



            </div>
        </div>
    );
}

export default AboutPage;
