const StageButton = ({ taskNum }) => {
  //light
  //input
  return (
    <div className="stage-button">
      <div className="stage-light">
        <h1 className="task-h2">{taskNum}</h1>
      </div>
      <div className="stage-input">
        <form>
          <input
            className="form-input button-input"
            type="text"
            placeholder="enter code..."
          />
        </form>
      </div>
    </div>
  )
}

export default StageButton
