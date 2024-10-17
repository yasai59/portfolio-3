import { useState } from 'react'
import { MiniBob } from '../components/MiniBob'
import { Subtitle } from '../components/Subtitle'
import { TableItem } from '../components/TableItem'
import { useTranslation } from 'react-i18next'
import { Table } from '../components/Table'

export const StudiesSection = () => {

  const {t} = useTranslation();

  const [text, setText] = useState('');

  const handleHover = (text: string) => {
    setText(text);
  }

  return (
    <section className='container'>
      <div className="flex items-center justify-between">
        <Subtitle>{t("Studies")}</Subtitle>
        <div className='flex items-center'>
          <p className='mr-10'>{text}</p>
         <MiniBob/>
        </div>
      </div>
      <Table>
        <TableItem handleHover={handleHover} comentary={t('')} centre='FIB-UPC' course={t('Computer Engineering')} duration={'4 ' + t('years')} period='2024-2028'/>
        <TableItem handleHover={handleHover} comentary={t('')} centre='Jaume Viladoms' course={t('Web App Development')} duration={"2 " + t('years')} period='2022-2024'/>
        <TableItem handleHover={handleHover} comentary={t('') }centre='Jaume Viladoms' course={t('Microcomputer systems and networks')} duration={"2 " + t('years')} period='2020-2022'/>
      </Table>
    </section>
  )
}
