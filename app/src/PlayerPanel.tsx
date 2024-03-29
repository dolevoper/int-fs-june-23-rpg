import styles from "./PlayerPanel.module.scss";

export type Stats = {
  hp: number;
  stamina: number;
  attack: number;
  defense: number;
};

export type PlayerData = {
  name: string;
  stats: Stats;
  currentHp: number;
};

type PlayerPanelProps = {
  playerData: PlayerData;
};

export function PlayerPanel({ playerData }: PlayerPanelProps) {
  const {
    name,
    stats: { hp, stamina, attack, defense },
    currentHp,
  } = playerData;

  return (
    <article className={styles.wrapper}>
      <h2>{name}</h2>
      <p>
        HP: {currentHp}/{hp}
      </p>
      <p>Stamina: {stamina}</p>
      <p>Attack: {attack}</p>
      <p>Defense: {defense}</p>
    </article>
  );
}
