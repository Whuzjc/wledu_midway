import { Init, Provide } from '@midwayjs/decorator';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { In, Repository } from 'typeorm';
import { InformationEntity } from '../entity/info';

/**
 * dict模块-刊物信息
 */
@Provide()
export class InformationService extends BaseService {
  @InjectEntityModel(InformationEntity)
  InformationEntity: Repository<InformationEntity>;

  @Init()
  async init() {
    await super.init();
    this.setEntity(this.InformationEntity);
  }

  /**
   * 批量导入刊物信息
   * @param informations 刊物信息列表
   */
  async batchImport(informations: InformationEntity[]) {
    return this.InformationEntity.save(informations);
  }

}
