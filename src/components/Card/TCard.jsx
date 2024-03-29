import React, { useMemo } from 'react';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Checkbox } from 'primereact/checkbox';
import './TCard.css';
import moment from 'moment';

export default function TCard({ record, edit, deleted, toggle }) {
  const data = useMemo(() => {
    return {
      now: moment(moment().format('DD.MM.YYYY HH:mm'), 'DD.MM.YYYY HH:mm'),
      dead: moment(moment(record?.startDate).format('DD.MM.YYYY HH:mm'), 'DD.MM.YYYY HH:mm'),
    };
  }, [record]);

  const footer = (
    <div className="container-button">
      <Button
        onClick={() => edit(record)}
        label="Изменить"
        icon="pi pi-pencil"
        className="button-cards"
      />
      <Button
        onClick={() => deleted(record.id)}
        label="Удалить"
        icon="pi pi-trash"
        className="p-button-outlined p-button-danger button-cards"
      />
    </div>
  );

  function declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }

  function getDiffData(datanow, dataend) {
    const differenceInYears = Math.abs(datanow.diff(dataend, 'years'));
    const differenceInMonths = Math.abs(datanow.diff(dataend, 'months'));
    const differenceInDays = Math.abs(datanow.diff(dataend, 'days'));
    const differenceInHour = Math.abs(datanow.diff(dataend, 'hours'));
    const differenceInTime = Math.abs(datanow.diff(dataend, 'minutes'));

    if (differenceInYears != 0) {
      return `${differenceInYears} ${declensionNum(differenceInYears, ['год', 'года', 'лет'])}`;
    } else if (differenceInMonths != 0) {
      return `${differenceInMonths} ${declensionNum(differenceInMonths, [
        'месяц',
        'месяца',
        'месяцев',
      ])}`;
    } else if (differenceInDays != 0) {
      return `${differenceInDays} ${declensionNum(differenceInDays, ['день', 'дня', 'дней'])}`;
    } else if (differenceInHour != 0) {
      return `${differenceInHour} ${declensionNum(differenceInHour, ['час', 'часа', 'часов'])}`;
    } else if (differenceInTime != 0) {
      return `${differenceInTime} ${declensionNum(differenceInTime, [
        'минута',
        'минуты',
        'минут',
      ])}`;
    }
  }

  return (
    <Card
      footer={footer}
      title={
        <div className="container-title">
          <p className="container-title__page">{record?.title}</p>
          <Checkbox checked={record?.completed} onChange={() => toggle(record.id)} />
        </div>
      }
      subTitle={
        <Tag
          value={record?.completed ? 'Выполнено' : 'В работе'}
          severity={record?.completed ? 'success' : 'warning'}
        />
      }
      className="container"
    >
      <p className="page">{record?.description}</p>
      {data.dead >= data.now ? (
        <p className="page-date">До {moment(record?.startDate).format('DD.MM.YYYY HH:mm')}</p>
      ) : (
        <p className="page-date__deadlain">Просрочено на {getDiffData(data.now, data.dead)}</p>
      )}
    </Card>
  );
}
