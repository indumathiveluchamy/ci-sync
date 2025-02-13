import { TabbedPaneComponent } from '.'
import React from 'react'

const contentData = {
  contents: [
    {
      subject: 'Overview',
      text: 'This is content of Overview'
    },
    {
      subject: 'Assumptions',
      text: '<ul><li>Assumption 1</li><li>Assumption 2</li><li>Assumption 3</li><li>Assumption 4</li></ul>'
    },
    {
      subject: 'Technical Design',
      text: 'This is content of Technical Design'
    }
  ]
}

describe('TabbedPaneComponent', () => {
  it('is truthy', () => {
    const pane = <TabbedPaneComponent data={contentData} />
    expect(pane).toBeTruthy()
  })
})
