import React, { useEffect, useState } from 'react';
import { Events } from 'react-scroll/modules';
import TestGrid from './Components/Blocks/TestGrid/TestGrid';
import Header from './Components/Blocks/Header/Header';
import Main from './Components/Blocks/Main/Main';
import ModalInformation from './Components/Blocks/Modals/ModalInformation/ModalInformation';
import Preloader from './Components/UI/Preloader/Preloader';
import Navigation from './Components/Blocks/Navigation/Navigation';
import SectionPreview from './Components/Sections/Preview/SectionPreview';
import SectionGrid from './Components/Sections/Grid/SectionGrid';
import SectionPrint from './Components/Sections/Print/SectionPrint';
import SectionUI from './Components/Sections/UI/SectionUI';
import Footer from './Components/Blocks/Footer/Footer';
import ContentInputs from './Components/Sections/UIContents/ContentInputs';
import ContentListen from './Components/Sections/UIContents/ContentListen';
import ContentButtons from './Components/Sections/UIContents/ContentButtons';
import ContentSelections from './Components/Sections/UIContents/ContentSelections';
import ContentAccordeon from './Components/Sections/UIContents/ContentAccordeon';
import main from './Components/Data/main.config';
import navigation from './Components/Data/navigation.config';
import preview from './Components/Data/preview.config';
import ui from './Components/Data/ui.config';

function App() {
  // Состояние для работы с модальным окном (отображение)
  const [modalInformationActive, setModalInformationActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    Events.scrollEvent.register('begin', () => {
      console.log('begin');
    });

    Events.scrollEvent.register('end', () => {
      console.log('end');
    });

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <div className="App">
      { !isLoading
        ? (
          <>
            <TestGrid enable={false} />
            <ModalInformation
              active={modalInformationActive}
              setActive={setModalInformationActive}
            />
            <Header
              modalActive={modalInformationActive}
              setModalActive={setModalInformationActive}
            />
            <Main>
              <Navigation
                data={navigation.data}
                wrapperClassName={navigation.wrapperClassName}
              />
              <div className={main.blockRight}>
                <SectionPreview
                  title={preview.title}
                  description={preview.desc}
                  text={preview.text}
                />
                <SectionGrid />
                <SectionPrint />
                <SectionUI
                  title={ui.title}
                >
                  <ContentInputs config={ui.inputs} />
                  <ContentListen config={ui.listen} />
                  <ContentButtons config={ui.buttons} />
                  <ContentSelections config={ui.selections} />
                  <ContentAccordeon config={ui.accordeon} />
                </SectionUI>
              </div>
            </Main>
            <Footer />

          </>
        )
        : <Preloader /> }
    </div>
  );
}

export default App;
