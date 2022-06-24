/* eslint-disable no-nested-ternary */
import { ScrollView } from 'react-native';
import { TopHeader, BotHeader } from './header';
import Main from './main';
import CardContainer from './cardContainer';

export default function BrowsePage({
  profile, slideRows, setCategory, category,
}) {
  const randomSet = slideRows[Math.floor(Math.random() * slideRows.length)];
  const typeOfRandom = category !== '' ? category : (
    slideRows.indexOf(randomSet) < 5 ? 'series' : 'films'
  );
  const randomItem = randomSet.data[Math.floor(Math.random() * randomSet.data.length)];
  console.log(profile);

  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      stickyHeaderHiddenOnScroll
    >

      <TopHeader
        profile={profile}
        setCategory={setCategory}
      />

      <BotHeader
        setCategory={setCategory}
      />

      <Main randomItem={randomItem} type={typeOfRandom} />

      {
        slideRows.map((item) => {
          const type = category !== '' ? category : (
            slideRows.indexOf(item) < 5 ? 'series' : 'films'
          );
          return <CardContainer set={item} key={`${item.title}-${item.data[0].slug}`} type={type} />;
        })
      }
    </ScrollView>
  );
}
