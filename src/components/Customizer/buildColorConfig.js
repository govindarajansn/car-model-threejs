import colorscustomiser from './ShoeConfig';

export function generateConfig(colors, index) {
  const generatedConfig = colorscustomiser[index].colorConfigs.map((config) => {
    return { ...config, colors: [...colors] };
  });
  return generatedConfig;
}
