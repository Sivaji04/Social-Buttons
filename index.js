const Button = props => {
  //  Write your code here.
  const {css, name} = props;
  return <button className={css}>{name}</button>
  
}

const element = (
  //  Write your code here.
  <div className="container">
   <h1>Social Buttons</h1>
   <div className="buttons-container">
    <Button css="like" name="Like/>
    <Button css="comment" name="Comment/>
    <Button css="share" name="Share/>
   </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
