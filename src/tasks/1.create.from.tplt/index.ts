import * as tasks from '..';
import { InquirerUtils } from "../../utils/inquirer"
import { ProjectSetupUtil } from '../../utils/projectsetup';

export default {
    tag: 'create.from.template',
    description: 'Create a New Project from a Template',
    run: async (_backCb: Function) => {
        InquirerUtils.handlePrompt({
            // 'v2':{
            //     disabled: true,
            //     description: 'V2',
            // },
            'oftv2': {
                description: 'OFTV2',
                tag: 'oftv2',
                run: async () => {
                    await ProjectSetupUtil.createNewProject('oftv2');
                }

            },
            // 'v1':{
            //     disabled: true,
            //     description: 'V1',
            // },
            // 'oft': {
            //     description: 'OFT',
            //     tag: 'oft',
            //     run: async () => {
            //         await ProjectSetupUtil.createNewProject('oft');
            //     }

            // },
            'onft1155': {
                description: 'ONFT1155',
                tag: 'onft1155',
                run: async () => {
                    await ProjectSetupUtil.createNewProject('onft1155');
                }
            },
            'proxyonft1155': {
                description: 'ProxyONFT1155',
                tag: 'proxyonft1155',
                run: async () => {
                    await ProjectSetupUtil.createNewProject('proxyonft1155');
                }

            },
            'onft721': {
                description: 'ONFT721',
                tag: 'onft721',
                run: async () => {
                    await ProjectSetupUtil.createNewProject('onft721');
                }
            },
            
            'proxyoft': {
                description: 'ProxyOft',
                tag: 'proxyoft',
                run: async () => {
                    await ProjectSetupUtil.createNewProject('proxyoft');
                }

            },
            
            'pingpong': {
                description: 'PingPong',
                tag: 'pingpong',
                run: async () => {
                    await ProjectSetupUtil.createNewProject('pingpong');
                }
            },
            'omnicounter': {
                description: 'OmniCounter',
                tag: 'omnicounter',
                run: async () => {
                    await ProjectSetupUtil.createNewProject('omnicounter');
                }
            },
        }, () => {
            InquirerUtils.handlePrompt(tasks.default);
        }, false, "Select a Template to Create a New Project:");
    }
};