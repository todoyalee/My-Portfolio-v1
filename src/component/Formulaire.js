import React, { useState } from 'react';
import './EnergyCalculator.css'; // Import the CSS file for styling

const EnergyCalculator = () => {
  const [appliance, setAppliance] = useState('tv');
  const [hours, setHours] = useState(1);
  const [days, setDays] = useState(1);
  const [result, setResult] = useState('');

  const calculateConsumption = () => {
    const powerRatings = {
      tv: 100,
      laptop: 50,
      fridge: 200,
      ac: 1500,
    };

    const power = powerRatings[appliance];
    const consumption = (power * hours * days) / 1000; // Convert to kWh

    let advice = '';
    if (consumption > 50) {
      advice = 'Conseil : Réduisez l\'utilisation ou changez pour un appareil plus économe.';
    } else {
      advice = 'Bonne gestion de votre consommation ! Continuez ainsi.';
    }

    setResult(`Votre consommation est d'environ ${consumption.toFixed(2)} kWh par mois.<br>${advice}`);
  };

  return (
    <div className="energy-calculator">
      <h2>Calculateur de consommation énergétique</h2>
      <form>
        <label htmlFor="appliance">Appareil utilisé :</label>
        <select
          id="appliance"
          value={appliance}
          onChange={(e) => setAppliance(e.target.value)}
        >
          <option value="tv">Télévision (100W)</option>
          <option value="laptop">Ordinateur portable (50W)</option>
          <option value="fridge">Réfrigérateur (200W)</option>
          <option value="ac">Climatisation (1500W)</option>
        </select>

        <label htmlFor="hours">Heures d'utilisation par jour :</label>
        <input
          type="number"
          id="hours"
          min="1"
          max="24"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />

        <label htmlFor="days">Nombre de jours par mois :</label>
        <input
          type="number"
          id="days"
          min="1"
          max="31"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />

        <button type="button" onClick={calculateConsumption}>
          Calculer la consommation
        </button>
      </form>

      <div
        className="result"
        dangerouslySetInnerHTML={{ __html: result }}
      />
    </div>
  );
};

export default EnergyCalculator;
