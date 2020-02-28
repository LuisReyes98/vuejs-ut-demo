import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

// Describe una funcionalidad o caso de testeo
describe('HelloWorld.vue', () => {
  it('should have the correct text', () => {
    expect(HelloWorld.data().msg)
      .to.equal('Welcome to Your Vue.js App')
  })

  // cada it es un caso de testeo
  it('should render correct contents', () => {
    // Se monta el componente para ejecutarlo
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()

    // se ejecuta una comprobacion en la cual un valor se espera del componente
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
