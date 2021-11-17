import { mount } from '@vue/test-utils'
import RadioButton from '../RadioButton.vue'

it('should set radio button to checked', async () => {
    const subject = mount(RadioButton)
    const inputEle = subject.element as HTMLInputElement

    await subject.setChecked(true)

    // @ts-ignore
    expect(inputEle.selected /* Property 'selected' does not exist on type 'HTMLInputElement' */).toBe(true)

    /*
      Accordion to the documentation 'inputEle.checked' should be true
      https://vue-test-utils.vuejs.org/api/wrapper/#setchecked
    */
    expect(inputEle.checked).toBe(true)
})
