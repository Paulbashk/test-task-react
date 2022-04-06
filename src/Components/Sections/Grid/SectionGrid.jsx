import React from 'react';
import WrapperTitle from '../../UI/WrapperTitle/WrapperTitle';
import Section from '../../UI/Section/Section';
import Rules from '../../Blocks/Rules/Rules';
import grid from '../../Data/grid.config';

function SectionGrid() {
  return (
    <Section classesNameSection={grid.classesNameSection}>
      <WrapperTitle
        title={grid.title}
        description={grid.desc}
        prefix={grid.classesNameSection}
      />
      <Rules
        data={grid.rules}
        prefix={grid.classesNameSection}
      />
    </Section>
  );
}

export default SectionGrid;
