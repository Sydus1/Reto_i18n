import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from 'react-intl';

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
        <FormattedNumber value={props.offer.salary} />{' '}
        <FormattedMessage id={props.offer.salary === 1 ? "Million_singular" : "Million"} />
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumber value={props.offer.views} />
      </td>
    </tr>
  );
};

export default Job;
