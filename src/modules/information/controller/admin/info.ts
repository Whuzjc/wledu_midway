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
  
    @Post('/batchImport', { summary: '批量导入刊物信息' })
    async batchImport(@Body('informations') informations: InformationEntity[]) {
      return this.ok(await this.dictPublicationInfoService.batchImport(informations));
    }
}
