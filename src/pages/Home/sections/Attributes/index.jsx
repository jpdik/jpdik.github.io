import {useCallback, useRef} from 'react';

import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';
import {faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ParallaxCard from 'react-animated-3d-card';
import {useTranslation} from 'react-i18next';

import {attributes} from './attributes';
import {
  Card,
  CardContent,
  CardFooter,
  CardImage,
  CardTitle,
  Content,
  Section,
  Title,
} from './style';

const Attributes = () => {
  const containerRef = useRef();

  const updateCursor = ele => {
    ele.style.cursor = 'grabbing';
    ele.style.userSelect = 'none';
  };

  const resetCursor = ele => {
    ele.style.cursor = 'grab';
    ele.style.removeProperty('user-select');
  };

  const handleMouseDown = useCallback(e => {
    const ele = containerRef.current;
    if (!ele) {
      return;
    }
    const startPos = {
      left: ele.scrollLeft,
      top: ele.scrollTop,
      x: e.clientX,
      y: e.clientY,
    };

    const handleMouseMove = e => {
      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;
      ele.scrollTop = startPos.top - dy;
      ele.scrollLeft = startPos.left - dx;
      updateCursor(ele);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      resetCursor(ele);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  const handleTouchStart = useCallback(e => {
    const ele = containerRef.current;
    if (!ele) {
      return;
    }
    const touch = e.touches[0];
    const startPos = {
      left: ele.scrollLeft,
      top: ele.scrollTop,
      x: touch.clientX,
      y: touch.clientY,
    };

    const handleTouchMove = e => {
      const touch = e.touches[0];
      const dx = touch.clientX - startPos.x;
      const dy = touch.clientY - startPos.y;
      ele.scrollTop = startPos.top - dy;
      ele.scrollLeft = startPos.left - dx;
      updateCursor(ele);
    };

    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      resetCursor(ele);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  }, []);

  const {t} = useTranslation();
  const renderAttributes = () => {
    return attributes.map((item, index) => (
      <Card key={index}>
        <ParallaxCard
          style={{
            backgroundColor: '#eff8ff',
            width: '250px',
            height: '300px',
            cursor: 'grab',
            userSelect: 'none',
          }}
          onClick={() => console.log('Card clicked')}>
          <CardContent>
            <CardTitle $color={item.color}>{item.title}</CardTitle>
            <CardImage>
              {item.Icon ? <item.Icon color={item.color} /> : null}
            </CardImage>
            <CardFooter $color={item.color}>
              {[1, 2, 3, 4, 5].map((star, index) => (
                <FontAwesomeIcon
                  key={index}
                  color="white"
                  icon={star <= item.stars ? faStarSolid : faStarRegular}
                  size="lg"
                />
              ))}
            </CardFooter>
          </CardContent>
        </ParallaxCard>
      </Card>
    ));
  };
  return (
    <Section id="attributes">
      <Title>{t('attributesTitle')}</Title>
      <Content
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}>
        {renderAttributes()}
      </Content>
    </Section>
  );
};

export default Attributes;
