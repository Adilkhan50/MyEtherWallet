import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import Congratulations from '@/layouts/GettingStarted/components/Congratulations/Congratulations.vue';
import { Tooling } from '@@/helpers';

describe('Congratulations.vue', () => {
  let localVue, i18n, wrapper, store;
  const progressBarValue = 'Congratulations progressBarValue';

  beforeAll(() => {
    const baseSetup = Tooling.createLocalVueInstance();
    localVue = baseSetup.localVue;
    i18n = baseSetup.i18n;
    store = baseSetup.store;
  });

  beforeEach(() => {
    wrapper = shallowMount(Congratulations, {
      localVue,
      i18n,
      store,
      attachToDocument: true,
      propsData: { progressBarValue },
      stubs: { 'router-link': RouterLinkStub }
    });
  });

  it('should render correct contents', () => {
    expect(
      wrapper.vm.$el
        .querySelector('.block-progressbar__progressbar div')
        .className.trim()
    ).toEqual(progressBarValue);
  });

  describe('Congratulations.vue Methods', () => {});

  it('should dismount properly', () => {
    expect(wrapper.destroy()).toBe(undefined);
  });
});
