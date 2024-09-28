import React, { useState } from "react";
import Job from "./job";
import { FormattedMessage, useIntl } from "react-intl";

const JobsList = () => {
  const intl = useIntl();
  const language = intl.locale;

  // Definir los estilos en línea según el idioma
  const headerStyle = {
    backgroundColor: language.startsWith('es') ? '#f8f9fa' : '#343a40',
    color: language.startsWith('es') ? '#000' : '#fff',
  };

  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      views: 1250,
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      views: 250,
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      views: 700,
    },
  ]);

  return (
    <div>
      <h1>
        <FormattedMessage id="JobOffers" defaultMessage="Job Offers" />
      </h1>
      <table className="table">
        {/* Aplicar los estilos dinámicos al encabezado */}
        <thead style={headerStyle}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="Position" defaultMessage="Position" />
            </th>
            <th scope="col">
              <FormattedMessage id="Company" defaultMessage="Company" />
            </th>
            <th scope="col">
              <FormattedMessage id="Salary" defaultMessage="Salary" />
            </th>
            <th scope="col">
              <FormattedMessage id="City" defaultMessage="City" />
            </th>
            <th scope="col">
              <FormattedMessage id="PublicationDate" defaultMessage="Publication Date" />
            </th>
            <th scope="col">
              <FormattedMessage id="Views" defaultMessage="Number of Views" />
            </th>
          </tr>
        </thead>
        <tbody>
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
