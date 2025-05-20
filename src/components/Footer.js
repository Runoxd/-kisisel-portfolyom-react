
import React, { useState } from 'react';
import './Footer.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Footer() {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const toggleDetails = () => {
        setIsDetailsVisible(!isDetailsVisible);
    };


    const copyrightDetailsText = `
    Bu web sitesinde yer alan tüm içerikler (metinler, görseller, tasarımlar, kodlar vb.) 
    Muhammet Onur Özdemir adına aittir ve Fikir ve Sanat Eserleri Kanunu ile uluslararası 
    telif hakkı yasaları kapsamında korunmaktadır. İzinsiz kopyalanamaz, çoğaltılamaz, 
    dağıtılamaz veya herhangi bir şekilde kullanılamaz.

    Sitede yer alan projeler, Muhammet Onur Özdemir'in kişisel çalışmalarını veya 
    belirtilen firmalar/kişiler için yaptığı çalışmaları temsil eder. 
    Bu projelerin ticari hakları ilgili proje sahiplerine aittir.

    Bu site yalnızca kişisel portfolyo sunumu amacıyla oluşturulmuştur. 
    Sitedeki bilgiler genel niteliktedir ve herhangi bir profesyonel tavsiye niteliği taşımaz.

    Kullanım Koşulları:
    1. Bu siteyi kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.
    2. Site içeriği bilgilendirme amaçlıdır.
    3.  Muhammet Onur Özdemir, site içeriğinin doğruluğu ve güncelliği konusunda garanti vermez.
    4. Sitenin kullanımından doğabilecek herhangi bir zarardan  Muhammet Onur Özdemir sorumlu tutulamaz.

    Gizlilik Politikası:
    1. İletişim formu aracılığıyla gönderilen kişisel bilgileriniz (ad, e-posta vb.) 
       sadece sizinle iletişim kurmak amacıyla kullanılacak ve üçüncü şahıslarla paylaşılmayacaktır.
    2. Sitemiz, kullanıcı deneyimini iyileştirmek amacıyla anonim çerezler (cookies) kullanabilir.
       Tarayıcı ayarlarınızdan çerez kullanımını yönetebilirsiniz.

    Tüm hakları saklıdır. © ${new Date().getFullYear()}  Muhammet Onur Özdemir
  `;



    return (
        <footer className="site-footer">
            <p>
                &copy; {new Date().getFullYear()}  Muhammet Onur Özdemir. Tüm Hakları Saklıdır.
            </p>
            <button onClick={toggleDetails} className="footer-details-button">
                Telif Hakları ve Koşullar
                {isDetailsVisible ? <FaChevronUp style={{ marginLeft: '8px' }} /> : <FaChevronDown style={{ marginLeft: '8px' }} />}
            </button>

            {}
            {isDetailsVisible && (
                <div className="footer-copyright-details">
                    <h4>Genel Bilgilendirme ve Yasal Uyarılar</h4>
                    <pre>{copyrightDetailsText}</pre> {}
                </div>
            )}

            <p style={{ marginTop: isDetailsVisible ? '20px' : '5px' }}> {}
                Bu site React ile <span style={{ color: 'var(--accent-color)' }}>&hearts;</span> ile oluşturulmuştur.
            </p>
        </footer>
    );
}

export default Footer;