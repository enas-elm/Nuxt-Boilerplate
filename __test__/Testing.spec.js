
// Function
function sum(a, b) {
    return a + b;
}
// Test
test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});


// import { mount } from '@vue/test-utils';
// import MyPage from '@/pages/index.vue';

// describe('MyPage.vue', () => {
//     it('se charge correctement', () => {
//         const wrapper = mount(MyPage);

//         expect(wrapper.exists()).toBe(true);

//         expect(wrapper.text()).toContain('THIS IS A BOILERPLATE');
//     });
// });
