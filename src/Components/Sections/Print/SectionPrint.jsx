import React from 'react';
import WrapperTitle from '../../UI/WrapperTitle/WrapperTitle';
import Section from '../../UI/Section/Section';
import Tabs from '../../UI/Tabs/Tabs';
import print from '../../Data/print.config';

function SectionPrint() {
  return (
    <Section classesNameSection={print.classesNameSection}>
      <WrapperTitle
        title={print.title}
        description={print.desc}
        prefix={print.classesNameSection}
      />
      <Tabs
        data={print.tabs}
        tabsNavClassName={print.tabsNavClassName}
        tabContentsClassName={print.tabContentsClassName}
        firstTab={window.screen.width <= 768 ? 1 : 0}
        prefix={print.classesNameSection}
      />
    </Section>
  );
}

export default SectionPrint;
