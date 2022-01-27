import Column from './Column';
import Card from '../../Card';

function Grid() {
  return (
    <div className="grid">
      <Column>
        <Card />
        <Card />
      </Column>
      <Column>
        <Card />
        <Card />
      </Column>
    </div>
  );
}

export default Grid;
