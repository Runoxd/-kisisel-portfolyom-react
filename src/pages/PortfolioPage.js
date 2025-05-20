
import React, { useState } from 'react';
import './PageStyles.css';
import './PortfolioPage.css';
import PortfolioItem from '../components/PortfolioItem';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";


import projelerimKapakResmi from '../assets/images/proje1-kapak.jpg';
import proje1Detay1Placeholder from '../assets/images/tictactoe.jpg';
import proje1Detay2Placeholder from '../assets/images/mobil-banka.jpg';

import firmalarKapakUrl from  '../assets/images/sirket1-kapak.jpg';
import firmaProjesi1Url from  '../assets/images/teknokent.jpg';
import firmaProjesi2Url from  '../assets/images/devinsoft.jpg';

import blogKapakUrl from  '../assets/images/blog1-kapak.jpg';
import kisiselFoto1Url  from  '../assets/images/gezi.jpg';
import kisiselFoto2Url  from  '../assets/images/kamp.jpg';
import kisiselFoto3Url  from  '../assets/images/sunum.jpg';


function PortfolioPage() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [currentGallerySlides, setCurrentGallerySlides] = useState([]);


    const mainCategories = [
        {
            mainTitle: "Projelerim",
            mainCategoryDescription: "Tamamladığım ve üzerinde çalıştığım çeşitli web ve mobil uygulama projeleri.",
            categoryCoverImage: projelerimKapakResmi,
            gallerySlides: [
                {
                    src: proje1Detay1Placeholder,
                    title: "TİCTACTOE Oyunu",
                    description: "BU çalışmam proje ödevim için tasarlanan , kullanıcın verilerinin tutulduğu bir tictactoe oyun projesidir",
                    technologies: "React, JavaScript, CSS, Firebase ",
                    client: "Kişisel Proje",
                    date: "Mayıs 2023"
                },
                {
                    src: proje1Detay2Placeholder,
                    title: "Mobil Banka Arayüzü",
                    description: "Sanal bir bankanın verilerini mobil ugulamada görmek için tasarlanan ugulama ekip çalışması",

                    technologies: "CSS , Oracle Database, Java, HTML ",
                    client: "Mobil banka arayüzü",
                    date: "Temmuz 2024"
                },

            ]
        },
        {
            mainTitle: "Çalıştığım Firmalar",
            mainCategoryDescription: "İş hayatım  için tecrübe kazandığım bazı firmalar",
            categoryCoverImage: firmalarKapakUrl,
            gallerySlides: [
                {
                    src: firmaProjesi1Url,
                    title: "Kahramanmaraş Teknokent",
                    description: "2024 yılının temmuz ve ağustos aylarında yarı zamanlı kuluçka ekibinde çalıştığım şirket",
                    date: "Temmuz-Ağustos 2024"
                },
                {
                    src:firmaProjesi2Url,
                    title: "DevinSoft",
                    description: "İş hayatım için tecrübe kazanmak amacıyla yarı zamanlı  gönüllü staj yaptığım Kahramanmaraş Teknokent bünyesinde faliyet gösteren özel bir şirket ",

                    date: "Temmuz-Ağustos 2024"
                },
            ]
        },

        {
            mainTitle: "Etkinliklerim",
            mainCategoryDescription: "Bazı yapmış olduğum etkinlikler ",
            categoryCoverImage: blogKapakUrl,
            gallerySlides: [
                {
                    src: kisiselFoto1Url,
                    title: "Tarihi Yer ",
                    description: "Mersinde bulunan Sent Antuan Latin Katolik Kilisesi gezisi",
                    date: "Temmuz 2023"
                },
                {
                    src:kisiselFoto2Url,
                    title:" Kamp ",
                    description:"Arkadaşlarımızla kendi aramızda Antalya'da yapmış oluğumuz kamp etkinliği ",
                    date: "Ağustos 2023"
                },
                {
                    src:kisiselFoto3Url,
                    title:"Teknoloji Konferansı ",
                    description:"Büyük şirketlerin katıldığı,gelişen teknoloji çağı hakkında etkinlikler ve sunumların yapıldığı konferans etkinliği",
                    date: "Ocak 2024"
                },
            ]
        },
    ];


    const handleOpenLightbox = (gallerySlidesForCategory) => {
        if (gallerySlidesForCategory && gallerySlidesForCategory.length > 0) {
            const slidesForLightbox = gallerySlidesForCategory.map(slide => ({
                src: slide.src,
                title: slide.title,
                description: (
                    <>
                        {slide.description && <p>{slide.description}</p>}
                        {slide.technologies && <p><strong>Teknolojiler:</strong> {slide.technologies}</p>}
                        {slide.client && <p><strong>Müşteri/Proje Türü:</strong> {slide.client}</p>}
                        {slide.date && <p><strong>Tarih:</strong> {slide.date}</p>}
                        {slide.projectUrl && slide.projectUrl !== '#' && (
                            <p><a href={slide.projectUrl} target="_blank" rel="noopener noreferrer" className="lightbox-project-link">Proje Linki</a></p>
                        )}
                    </>
                )
            }));
            setCurrentGallerySlides(slidesForLightbox);
            setLightboxIndex(0);
            setLightboxOpen(true);
        }
    };

    return (
        <div className="page-content portfolio-page">
            <h1>Portfolyom</h1>
            <p className="portfolio-intro">
                Çalışmalarımı , çalıştığım firmaları ve ilgi alanlarımı yansıtan görselleri aşağıdaki kategorilere tıklayarak inceleyebilirsiniz.
            </p>

            {mainCategories.length === 0 ? (
                <p className="text-center" style={{color: 'var(--text-muted)'}}>Henüz sergilenecek bir galeri bulunmamaktadır.</p>
            ) : (
                <div className="portfolio-grid">
                    {mainCategories.map((category, index) => (
                        <PortfolioItem
                            key={category.mainTitle + index}
                            image={category.categoryCoverImage}
                            title={category.mainTitle}
                            category={category.mainCategoryDescription || "Galeriyi Görüntüle"}
                            onClick={() => handleOpenLightbox(category.gallerySlides)}
                        />
                    ))}
                </div>
            )}

            {lightboxOpen && currentGallerySlides.length > 0 && (
                <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    slides={currentGallerySlides}
                    index={lightboxIndex}
                    plugins={[Captions, Thumbnails, Zoom]}
                    captions={{
                        showToggle: true,
                        descriptionTextAlign: "start",
                        descriptionMaxLines: 5,
                    }}
                    thumbnails={{ showToggle: true, position: "bottom" }}
                    zoom={{ maxZoomPixelRatio: 3, doubleTapDelay: 300, doubleClickDelay: 300, doubleClickMaxStops: 2 }}

                />
            )}
        </div>
    );
}

export default PortfolioPage;
