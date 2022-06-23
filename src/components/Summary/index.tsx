import { ReactNode } from 'react';
import { AbilityPercent, InfoBody, InfoContainer, InfoCore, InfoTitle, SubTitle, SummaryBody, Title, TitleContainer } from './styles';

interface Summary {
  title: string;
  subTitle: string;
  summaries?: InfoBody[];
  type: string;
  children?: ReactNode;
}

interface SummaryInfo {
  infoTitle: string;
  value: string;
}

interface InfoBody {
  infoTitle: string;
  value: string;
}

export function Summary({ title, subTitle, summaries, type, children }: Summary) {
  return (
    <SummaryBody type={type}>
      <TitleContainer className='TitleContainer'>

        {title? <Title>{title}</Title> : ''}

        {subTitle? <SubTitle>{subTitle}</SubTitle> : ''}

      </TitleContainer>

      {type === '%list' && summaries?.map(
        (sum) => <SummaryInfo key={sum.infoTitle} infoTitle={sum.infoTitle} value={sum.value}/>
      )}

      {type !== '%list' && children}

    </SummaryBody>
  )
}

export function SummaryInfo({ infoTitle, value }: SummaryInfo) {
  let filteredValue = value === '100%' ? '' : value;

  return (
    <InfoBody>
      <InfoContainer>

        {infoTitle ? <InfoTitle>{infoTitle}</InfoTitle> : <></>}
        {filteredValue ? <InfoCore>{filteredValue}</InfoCore> : <></>}

        <AbilityPercent value={value}>
          <div></div>
        </AbilityPercent>

      </InfoContainer>
    </InfoBody>
  )
}