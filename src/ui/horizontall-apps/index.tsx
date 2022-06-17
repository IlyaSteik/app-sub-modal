import { Button, FixedLayout, HorizontalScroll, SizeType, Spacing, Text } from '@vkontakte/vkui';
import { SparklesIcon } from '../icons/Sparkles';
import { AppLogo } from './AppLogo';
import city from './apps-svg/city.svg';
import deliver from './apps-svg/deliver.svg';
import dict from './apps-svg/dict.svg';
import friends from './apps-svg/friends.svg';
import hinter from './apps-svg/hinter.svg';
import medic from './apps-svg/medic.svg';
import stuff from './apps-svg/stuff.svg';
import { previewContent } from './constants';
import { DescItem } from './DescItem';
import { betweenFixed, bFixed, bTitle, button, hContainer, mSubTitle, mTitle } from './styles.css';
import { AppName } from './types';

export const HorizontalApps = () => {
  return (
    <>
      <FixedLayout vertical="top">
        <HorizontalScroll showArrows>
          <div className={hContainer}>
            <AppLogo appName={AppName.City} svgPath={city} />
            <AppLogo appName={AppName.Dictionary} svgPath={dict} />
            <AppLogo appName={AppName.Friends} svgPath={friends} />
            <AppLogo appName={AppName.GdePosylka} svgPath={deliver} />
            <AppLogo appName={AppName.Hinter} svgPath={hinter} />
            <AppLogo appName={AppName.Medic} svgPath={medic} />
            <AppLogo appName={AppName.Stuff} svgPath={stuff} />
          </div>
        </HorizontalScroll>
      </FixedLayout>
      <div className={betweenFixed}>
        <Text weight="1" className={mTitle}>
          Попробуйте avocado+
        </Text>
        <Text weight="3" className={mSubTitle}>
          Одна подписка для 10+ приложений
        </Text>
        <Spacing size={24} />

        {previewContent.friends?.map(f => (
          <DescItem {...f} key={f.title} />
        ))}
      </div>
      <FixedLayout filled vertical="bottom">
        <div className={bFixed}>
          <Button size="l" sizeY={SizeType.REGULAR} stretched before={<SparklesIcon />} className={button}>
            Попробовать
          </Button>
          <Text weight="3" className={bTitle}>
            за 79₽/месяц
          </Text>
        </div>
      </FixedLayout>
    </>
  );
};
