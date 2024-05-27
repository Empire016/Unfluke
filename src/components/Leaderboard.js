import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Leaderboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Leaderboard = () => {
  const data = [
    { rank: 1, name: 'Based on premium and', calmarRatio: 2.02, overallProfit: 194096.05, avgDailyProfit: 158.45, winPercentage: 0.62, price: '-', action: 'View' },
    { rank: 2, name: 'strategy_name', calmarRatio: 1.98, overallProfit: 171862.74, avgDailyProfit: 138.26, winPercentage: 0.6, price: '500', action: 'Buy' },
    { rank: 3, name: 'strategy_name', calmarRatio: 1.75, overallProfit: 264090.37, avgDailyProfit: 216.11, winPercentage: 0.64, price: '-', action: 'View' },
    { rank: 4, name: 'strategy_name', calmarRatio: 1.75, overallProfit: 264090.37, avgDailyProfit: 216.11, winPercentage: 0.64, price: '-', action: 'View' },
    { rank: 5, name: 'Wait and trade_Save', calmarRatio: 1.62, overallProfit: 124537.84, avgDailyProfit: 113.11, winPercentage: 0.61, price: '-', action: 'View' },
    { rank: 6, name: 'Based on premium wit', calmarRatio: 1.55, overallProfit: 99916.32, avgDailyProfit: 136.5, winPercentage: 0.48, price: '-', action: 'View' },
    { rank: 7, name: 'Selling with re entr', calmarRatio: 1.38, overallProfit: 254470.35, avgDailyProfit: 212.95, winPercentage: 0.63, price: '-', action: 'View' },
    { rank: 8, name: 'iron condor', calmarRatio: 1.31, overallProfit: 132699.25, avgDailyProfit: 103.43, winPercentage: 0.63, price: '-', action: 'View' },
    { rank: 9, name: 'strategy_name', calmarRatio: 1.12, overallProfit: 136226.09, avgDailyProfit: 111.11, winPercentage: 0.58, price: '-', action: 'View' },
    { rank: 10, name: 'strategy_name', calmarRatio: 1.11, overallProfit: 260759.53, avgDailyProfit: 175.71, winPercentage: 0.35, price: '-', action: 'View' },
  ];

  
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-2">LeaderBoards</h1>
      <div className="card custom-card">
        <div className="card-body">
          <div className="d-flex justify-content-between mb-2 ">
            <h4 className="card-title">Basic Backtest</h4>
            <div className="d-flex align-items-center">
              <label htmlFor="slippage" className="mr-2">Slippage</label>
              <select id="slippage" className="form-control w-auto">
                <option value="0.5%">0.5%</option>
                <option value="1%">1%</option>
                <option value="2%">2%</option>
              </select>
            </div>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Calmar Ratio</th>
                <th>Overall Profit</th>
                <th>Avg. Daily Profit</th>
                <th>Win %(Day)</th>
                <th>Price (Rs)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.rank}</td>
                  <td>{row.name}</td>
                  <td>
                    <FontAwesomeIcon icon={faArrowUp} /> {row.calmarRatio}
                  </td>
                  <td>{row.overallProfit}</td>
                  <td>{row.avgDailyProfit}</td>
                  <td>{row.winPercentage}</td>
                  <td>{row.price}</td>
                  <td><a href="#" className="text-primary">{row.action}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
