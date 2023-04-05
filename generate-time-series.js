function generateTimeSeries(sensor_1_data, sensor_2_data) {
    const timeSeries = [];
    let i = 0;
    let j = 0;
    while (i < sensor_1_data.length && j < sensor_2_data.length) {
      if (sensor_1_data[i].time < sensor_2_data[j].time) {
        timeSeries.push({time: sensor_1_data[i].time, temperature: (sensor_1_data[i].temperature + sensor_2_data[j - 1].temperature) / 2});
        i++;
      } else if (sensor_1_data[i].time > sensor_2_data[j].time) {
        timeSeries.push({time: sensor_2_data[j].time, temperature: (sensor_2_data[j].temperature + sensor_1_data[i].temperature) / 2});
        j++;
      } else {
        timeSeries.push({time: sensor_1_data[i].time, temperature: (sensor_1_data[i].temperature + sensor_2_data[j].temperature) / 2});
        i++;
        j++;
      }
    }
    while (i < sensor_1_data.length) {
      timeSeries.push(sensor_1_data[i]);
      i++;
    }
    while (j < sensor_2_data.length) {
      timeSeries.push(sensor_2_data[j]);
      j++;
    }
    return timeSeries;
  }

const sensor_1_data = [{time: 10.020, temperature: 7.7}, {time: 10.070, temperature: 7.9}] 
const sensor_2_data = [{time: 10.019, temperature: 7.37}, {time: 10.029, temperature: 7.4}]

const timeSeries = generateTimeSeries(sensor_1_data, sensor_2_data);
console.log(timeSeries);
