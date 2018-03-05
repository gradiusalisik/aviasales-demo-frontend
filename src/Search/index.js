import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { animateScroll as scroll } from 'react-scroll';
import FirstScreen from './FirstScreen';
import CardListMobile from './Mobile/CardList';
import CardList from './Card';
import Icon from '../Icon';
import Filter from './Filter';

import { ButtonUp, ButtonFilter, ButtonFilterSmall, ButtonShowMore } from '../UI/Button';
import {
  SearchStyled,
  Content,
  ButtonsUp,
  ButtonFilter as BtnFilter,
  ButtonFilterSmall as BtnFilterSmall,
  IconFilter,
  ShowMore,
  CardsMobile,
  Cards,
  Filters,
  Section,
  Container,
  RightColumn,
  Scroll,
  IconScroll,
} from './styled';

export default class Search extends PureComponent {
  state = {
    isActiveScroll: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const isActiveScroll = window.pageYOffset > 90;
    this.setState({
      isActiveScroll,
    });
  };

  handleScrollTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <SearchStyled>
        <Helmet>
          <title>Результаты поиска</title>
        </Helmet>
        <FirstScreen />
        <Section>
          <Container>
            <Filters>
              <Filter />
            </Filters>
            <Content>
              <ButtonsUp onClick={this.handleScrollTop} active={this.state.isActiveScroll}>
                <ButtonUp>Наверх</ButtonUp>
              </ButtonsUp>
              <BtnFilterSmall>
                <ButtonFilterSmall>
                  <IconFilter>
                    <Icon icon="filter" />
                  </IconFilter>
                </ButtonFilterSmall>
              </BtnFilterSmall>
              <CardsMobile>
                <CardListMobile />
              </CardsMobile>
              <Cards>
                <CardList />
              </Cards>
              <BtnFilter>
                <ButtonFilter>Фильтровать</ButtonFilter>
              </BtnFilter>
              <ShowMore>
                <ButtonShowMore>ПОКАЗАТЬ ЕЩЕ 10 БИЛЕТОВ!</ButtonShowMore>
              </ShowMore>
            </Content>
            <RightColumn />
          </Container>
        </Section>
        <Scroll onClick={this.handleScrollTop} active={this.state.isActiveScroll}>
          <IconScroll icon="scroll" />
        </Scroll>
      </SearchStyled>
    );
  }
}
