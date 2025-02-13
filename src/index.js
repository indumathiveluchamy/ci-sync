import React from 'react'
import styles from './styles.module.scss'
import $ from 'jquery'

const TabbedPaneComponent = ({ data }) => {
  $(function () {
    // read the input JSON content
    if (data !== undefined) {
      console.log('data.contents.length: ' + data.contents.length)
      $('#navbarDiv').empty()
      for (let i = 0; i < data.contents.length; i++) {
        const newDiv = $('<div class=' + styles.navbar + '></div>')
        const newAnchor = $('<a class="paneLink"></a>')
          .text(data.contents[i].subject)
          .attr('data-text', data.contents[i].text)
        newDiv.append(newAnchor)
        newAnchor.click(function () {
          $('#paneContentDiv').html($(this).data('text'))
        })
        $('#navbarDiv').append(newDiv)
      }
      if (data.contents.length > 0) {
        // Get the first link and click.
        $('.paneLink:first').click()
      }
    }
  })

  return (
    <div id='pane' className={styles.pane}>
      <div id='navbarDiv' />
      <div id='paneContentDiv' className={styles.paneContent} />
    </div>
  )
}

export default TabbedPaneComponent
