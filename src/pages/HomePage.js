
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import './PageStyles.css';
import './HomePage.css';

function HomePage() {

    const adinizSoyadiniz = "Muhammet Onur Özdemir";


    const mesleklerinizVeyaYetenekleriniz = [
        'Yazılım Geliştiriciyim',
        2000,
        'Bilgisayar Mühendisiyim',
       2000,
        ' Tasarım Meraklısıyım',
        2000,
        'Öğreciyim',
        2000,
    ];


    const heroAciklamasi = `Modern, kullanıcı dostu ve etkileşimli web deneyimleri oluşturma konusunda tutkuluyum.
  Yeteneklerimi ve tamamladığım projeleri keşfetmek için sitemde gezinebilirsiniz.
  Yeni projeler ve işbirlikleri için her zaman açığım!`;




    const typeAnimationColor = '#97ffff';

    return (
        <div className="page-content hero-section">
            {}
            <div className="hero-content">
                <h1>Merhaba, ben <span className="highlight-name">{adinizSoyadiniz}</span></h1>
                <h2>
                    Ben bir{' '}
                    <TypeAnimation
                        sequence={mesleklerinizVeyaYetenekleriniz}
                        wrapper="span"
                        speed={50}
                        deletionSpeed={70}
                        style={{ display: 'inline-block', color: typeAnimationColor }}
                        repeat={Infinity}
                    />
                </h2>
                <p className="hero-description">
                    {heroAciklamasi}
                </p>
                <div className="hero-buttons"> {}
                    <Link to="/portfolyo" className="btn btn-primary">
                        Portfolyomu Gör
                    </Link>
                    <Link to="/iletisim" className="btn btn-secondary">
                        İletişime Geç
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
