import { CoolController, BaseController } from '@cool-midway/core';
import { Body, Inject, Post, Get } from '@midwayjs/core';
import { InformationEntity } from "../../entity/info";
import { InformationService } from '../../service/info';
/**
 * 描述
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: InformationEntity,
  service: InformationService
})
export class AdminInformationEntity extends BaseController {
    @Inject()
    dictPublicationInfoService: InformationService;
  
    // @Post('/batchImport', { summary: '批量导入刊物信息' })
    // async batchImport(@Body('publications') publications: InformationService[]) {
    //   return this.ok(await this.dictPublicationInfoService.batchImport(publications));
    // }
  
    // @Get('/publisherOptions', { summary: '获取出版社下拉菜单选项' })
    // async getPublisherOptions() {
    //   return this.ok(await this.dictPublicationInfoService.getPublisherOptions());
    // }
}
