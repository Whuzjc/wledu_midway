import { BaseEntity } from '@cool-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * 描述
 */
@Entity('information')
export class InformationEntity extends BaseEntity {
    @Column({ comment: '录用时间', type: 'date' })
    date: Date;
  
    @Column({ comment: "信息标题" })
    title: string;

    @Column({ comment: "信息链接" })
    hypertext: string;

    @Column({ comment: "报送单位" })
    reportUnit: string;

    @Column({ comment: "录用单位" })
    hireUnit: string;

    @Column({ comment: "录用栏目" })
    hireColumn: string;
  
    @Column({ comment: "录用分值", type: "tinyint", default: 0 })
    score: number;

}
