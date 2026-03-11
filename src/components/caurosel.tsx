import {useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { supabase } from '../supabaseClient';
import { FALLBACK_IMAGE, getPublicImageUrl, preloadImage } from '../utils/image';

interface Foto {
  idFoto: number;
  Foto: string;
}

const FALLBACK_CAROUSEL_IMAGES: string[] = [FALLBACK_IMAGE, FALLBACK_IMAGE, FALLBACK_IMAGE];

export function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchCarouselImages = async (): Promise<string[]> => {
      const { data, error } = await supabase
        .from('Fotos')
        .select('idFoto, Foto')
        .order('idFoto', { ascending: false })
        .limit(8);

        console.log(data);

      if (error || !data || data.length === 0) {
        return FALLBACK_CAROUSEL_IMAGES;
      }

      return (data as Foto[]).map((photo) =>
        getPublicImageUrl(photo.Foto || '', 'imagens')
      );
    };

    const loadImages = async () => {
      setLoading(true);

      const imageUrls = await fetchCarouselImages();

      const loadedImages = await Promise.allSettled(
        imageUrls.map((url) => preloadImage(url))
      );

      const finalImages = loadedImages.map((result) =>
        result.status === 'fulfilled' ? result.value : FALLBACK_IMAGE
      );

      if (isMounted) {
        setImages(finalImages);
        setLoading(false);
      }
    };

    loadImages();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  if (loading) {
    return <div className="skeleton skeleton-carousel" />;
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map((item, imageIndex) => (
        <Carousel.Item key={imageIndex}>
          <img
            className="d-block w-100"
            src={item}
            alt={`Produto destaque ${imageIndex + 1}`}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = FALLBACK_IMAGE;
            }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}