const insert = document.getElementById('insert')

window.addEventListener('keydown',function(e){
  insert.innerHTML = 
  `<table>
    <tr>
      <th>key</th>
      <th>key-Code</th>
      <th>key-Value</th>
    </tr>
    <tr>
      <td>${e.key == ' ' ? 'SpaceBar' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>`
})