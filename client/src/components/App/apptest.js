{!isAuth && (
  <>
    <Route exact path="/">
      <Registration />
    </Route>
    <Route path="/auth">
      <Login />
    </Route>
   
  </>
)}
{isAuth && (
  <>
    <Route path="/todo">
      <Todo />
    </Route>
  </>
)}
{/* При неопределенной странице должен выводить ошибку, но не выводит */}
<Route path="*">
  <Errors />
</Route>
