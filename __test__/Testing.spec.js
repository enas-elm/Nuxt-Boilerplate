import sum from '../assets/sum.js'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

// import { mount } from '@vue/test-utils';
// import index from '@/pages/index.vue';

// describe('index.vue', () => {
//     it('se charge correctement', () => {
//         const wrapper = mount(index);

//         expect(wrapper.exists()).toBe(true);

//         expect(wrapper.text()).toContain('THIS IS A BOILERPLATE');
//     });
// });
