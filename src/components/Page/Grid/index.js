import Column from './Column';
function Grid() {
  return (
    <div className="grid">
      <Column>
        <p>Cards go here</p>
      </Column>
      <Column>
        <p>Cards go here</p>
      </Column>
    </div>
  );
}

export default Grid;
