import {ComponentMeta, Story} from '@storybook/react';
import React from 'react';
import {ImagineProvider, RichText, Container, Text, Divider} from './../../../index';
import {omitItems} from "../interface/RichText_interface";
import RichTextTypeClass from "./RichTextTypeClass";
import {getKeysOfType, getStoriesArgsTypes} from '../../../sharedCode/storybook/helpers';

const keysOfType = getKeysOfType(RichTextTypeClass, omitItems);
const argsTypes = getStoriesArgsTypes(keysOfType);


export default {
    title: 'Atoms/RichText',
    component: RichText,
    parameters: {
        controls: {
            expanded: false
        }
    },
    argTypes: {
        ...argsTypes,
        /* Component props */
        strHTML: {
            control:'text',
            table: {
                category: 'Component props',
            }
        },
    },
} as ComponentMeta<typeof RichText>;

export const Default: Story<any> = args => {
    return (
        <ImagineProvider id={'page-default'} testId={'page-default'} height={'20rem'}>
            <Container flexDirection={'col'}>
                <RichText strHTML='<p> זה טקסט <a href="https://google.co.il"> קליק על הלינק </a><strong> זה טקסט מוגדש </strong></p>' {...args} />
                <RichText strHTML='<p style="direction:rtl">זה <u>קטקס </u><strong>עשיר </strong>עבור <em>המערכת</em></p><p style="direction:rtl"><strong>הרכיב מציג html בתוך דפים ווב</strong></p><p style="direction:rtl"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✨ נא לעיין לדף ההדרכה של הרכיב</p>' />
                <RichText strHTML='<p>השקת הקו החדש לברלין, מגיעה בתזמון מדוייק עבור הישראלים שחולמים על טיסה למשחקי יורו 2024, שיתקיימו ברחבי<span>&nbsp;</span><a href="https://www.lametayel.co.il/destinations/germany-112" title="">גרמניה</a>, כולל ברלין. מחיר כרטיס טיסה יכלול גם כבודה במשקל 20 ק”ג לנוסע לבטן המטוס וטרולי במשקל 7 ק”ג.</p>' />
            </Container>
        </ImagineProvider>
    )
};
/*---------------------------------------------------------*/
export const WithRowLimit: Story<any> = () => {
    return (
      <ImagineProvider id={'page-row-limit'} testId={'page-default'} height={'20rem'}>
          <Container flexDirection={'col'}>
              <RichText rowLimit={"2"} strHTML='<p style="direction:rtl">זה <u>קטקס </u><strong>עשיר </strong>עבור <em>המערכת</em></p><p style="direction:rtl"><strong>הרכיב מציג html בתוך דפים ווב</strong></p><p style="direction:rtl"> ✨ נא לעיין לדף ההדרכה של הרכיב</p>' />
          </Container>
      </ImagineProvider>
    )
};
/*---------------------------------------------------------*/
export const RichTextWidthJavascriptCode: Story<any> = () => {
    return (
        <ImagineProvider id={'page-default'} testId={'page-default'} height={'20rem'}>
            <Container flexDirection={'col'} alignItems={'center'}>
                <Text text={'בדוגמה הזאת הועבר לרכיב קוד javascript שזה לא חוקי'} fontWeight={'500'} />
                <Divider margin={'25'} width={'50'}/>
                <RichText strHTML='<script>alert(0)</script>' />
                <Divider margin={'25'} width={'50'}/>
            </Container>
        </ImagineProvider>
    )
};
/*---------------------------------------------------------*/
export const PassEmptyProps: Story<any> = () => {
    return (
        <ImagineProvider id={'page-default'} testId={'page-default'} height={'20rem'}>
            <Container flexDirection={'col'} alignItems={'center'}>
                <Text text={'בדוגמה הזאת הועבר props רק'} fontWeight={'500'} />
                <Divider margin={'25'} width={'50'}/>
                <RichText strHTML='' />
                <Divider margin={'25'} width={'50'}/>
            </Container>
        </ImagineProvider>
    )
};
/*---------------------------------------------------------*/
export const invalidHTML: Story<any> = () => {
    return (
        <ImagineProvider id={'page-default'} testId={'page-default'} height={'20rem'}>
            <Container flexDirection={'col'} alignItems={'center'}>
                <Text text={'בדוגמה הזאת לא הועבר לרכיב קוד html'} fontWeight={'500'} />
                <Divider margin={'25'} width={'50'}/>
                <RichText strHTML='זה פיסקה לא וולידי' />
                <Divider margin={'25'} width={'50'}/>
            </Container>
        </ImagineProvider>
    )
};
/*---------------------------------------------------------*/

 