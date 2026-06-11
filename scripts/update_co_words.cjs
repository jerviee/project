const fs = require('fs');
const content = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf-8');
const lines = content.split('\n');
let insideArray = false;
let jsonLines = [];
for (let line of lines) {
    if (line.includes('export const mockWords: IELTSWord[] = [')) {
        insideArray = true;
        jsonLines.push('[');
        continue;
    }
    if (insideArray) {
        if (line.trim() === '];') {
            jsonLines.push(']');
            break;
        }
        jsonLines.push(line);
    }
}
const jsonStr = jsonLines.join('\n');
const words = JSON.parse(jsonStr);
const coWordData = {
    'coach': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'coach', rootMeaning: '教练', rootMeaningEn: 'coach', rootOrigin: '法语', rootOriginNote: '源自法语coche，意为马车', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'coal': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'coal', rootMeaning: '煤', rootMeaningEn: 'coal', rootOrigin: '古英语', rootOriginNote: '源自古英语col，意为煤', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'coarse': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'coarse', rootMeaning: '粗糙的', rootMeaningEn: 'coarse', rootOrigin: '中古英语', rootOriginNote: '源自中古英语cors', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'coast': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'coast', rootMeaning: '海岸', rootMeaningEn: 'coast', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语costa', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'coat': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'coat', rootMeaning: '外套', rootMeaningEn: 'coat', rootOrigin: '古法语', rootOriginNote: '源自古法语cote', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'code': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'code', rootMeaning: '代码', rootMeaningEn: 'code', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语codex', suffix: '-e', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'coffee': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'coffee', rootMeaning: '咖啡', rootMeaningEn: 'coffee', rootOrigin: '阿拉伯语', rootOriginNote: '源自阿拉伯语qahwa', suffix: '-ee', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'coin': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'coin', rootMeaning: '硬币', rootMeaningEn: 'coin', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语cuneus', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'cold': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cold', rootMeaning: '冷', rootMeaningEn: 'cold', rootOrigin: '古英语', rootOriginNote: '源自古英语ceald', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'collapse': { prefix: 'col', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'lapse', rootMeaning: '滑落', rootMeaningEn: 'slip', rootOrigin: '拉丁语', rootOriginNote: 'col(一起)+lapse(滑落)，崩溃', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'colleague': { prefix: 'col', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'league', rootMeaning: '选择', rootMeaningEn: 'choose', rootOrigin: '拉丁语', rootOriginNote: 'col(一起)+league(选择)，同事', suffix: '-ue', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'collect': { prefix: 'col', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'lect', rootMeaning: '收集', rootMeaningEn: 'gather', rootOrigin: '拉丁语', rootOriginNote: 'col(一起)+lect(收集)，收集', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'collection': { prefix: 'collect', prefixMeaning: '收集', prefixMeaningEn: 'collect', root: 'ion', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix', rootOrigin: '拉丁语', rootOriginNote: 'collect(收集)+-ion(名词后缀)，收藏', suffix: '-ion', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'college': { prefix: 'col', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'lege', rootMeaning: '选择', rootMeaningEn: 'choose', rootOrigin: '拉丁语', rootOriginNote: 'col(一起)+lege(选择)，学院', suffix: '-e', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'colony': { prefix: 'colon', prefixMeaning: '定居', prefixMeaningEn: 'settle', root: 'y', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix', rootOrigin: '拉丁语', rootOriginNote: 'colon(定居)+-y(名词后缀)，殖民地', suffix: '-y', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'color': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'color', rootMeaning: '颜色', rootMeaningEn: 'color', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语color', suffix: '-or', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'column': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'column', rootMeaning: '柱子', rootMeaningEn: 'column', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语columna', suffix: '-umn', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'comb': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'comb', rootMeaning: '梳子', rootMeaningEn: 'comb', rootOrigin: '古英语', rootOriginNote: '源自古英语comb', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'combat': { prefix: 'com', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'bat', rootMeaning: '打击', rootMeaningEn: 'beat', rootOrigin: '拉丁语', rootOriginNote: 'com(一起)+bat(打击)，战斗', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'combine': { prefix: 'com', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'bine', rootMeaning: '两个', rootMeaningEn: 'two', rootOrigin: '拉丁语', rootOriginNote: 'com(一起)+bine(两个)，结合', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'come': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'come', rootMeaning: '来', rootMeaningEn: 'come', rootOrigin: '古英语', rootOriginNote: '源自古英语cuman', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'comfort': { prefix: 'com', prefixMeaning: '加强', prefixMeaningEn: 'intensive', root: 'fort', rootMeaning: '强壮', rootMeaningEn: 'strong', rootOrigin: '拉丁语', rootOriginNote: 'com(加强)+fort(强壮)，安慰', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'command': { prefix: 'com', prefixMeaning: '加强', prefixMeaningEn: 'intensive', root: 'mand', rootMeaning: '命令', rootMeaningEn: 'order', rootOrigin: '拉丁语', rootOriginNote: 'com(加强)+mand(命令)，命令', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'comment': { prefix: 'com', prefixMeaning: '加强', prefixMeaningEn: 'intensive', root: 'ment', rootMeaning: '思考', rootMeaningEn: 'think', rootOrigin: '拉丁语', rootOriginNote: 'com(加强)+ment(思考)，评论', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'commerce': { prefix: 'com', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'merc', rootMeaning: '贸易', rootMeaningEn: 'trade', rootOrigin: '拉丁语', rootOriginNote: 'com(一起)+merc(贸易)，商业', suffix: '-e', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'commit': { prefix: 'com', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'mit', rootMeaning: '派遣', rootMeaningEn: 'send', rootOrigin: '拉丁语', rootOriginNote: 'com(一起)+mit(派遣)，承诺', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'common': { prefix: 'com', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'mon', rootMeaning: '服务', rootMeaningEn: 'serve', rootOrigin: '拉丁语', rootOriginNote: 'com(一起)+mon(服务)，共同的', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'communicate': { prefix: 'com', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'mun', rootMeaning: '服务', rootMeaningEn: 'serve', rootOrigin: '拉丁语', rootOriginNote: 'com(一起)+mun(服务)，交流', suffix: '-ate', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'community': { prefix: 'com', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'mun', rootMeaning: '服务', rootMeaningEn: 'serve', rootOrigin: '拉丁语', rootOriginNote: 'com(一起)+mun(服务)，社区', suffix: '-ity', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'company': { prefix: 'com', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'pan', rootMeaning: '面包', rootMeaningEn: 'bread', rootOrigin: '拉丁语', rootOriginNote: 'com(一起)+pan(面包)，公司', suffix: '-y', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'compare': { prefix: 'com', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'par', rootMeaning: '平等', rootMeaningEn: 'equal', rootOrigin: '拉丁语', rootOriginNote: 'com(一起)+par(平等)，比较', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'compel': { prefix: 'com', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'pel', rootMeaning: '驱使', rootMeaningEn: 'drive', rootOrigin: '拉丁语', rootOriginNote: 'com(一起)+pel(驱使)，强迫', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'compete': { prefix: 'com', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'pet', rootMeaning: '寻求', rootMeaningEn: 'seek', rootOrigin: '拉丁语', rootOriginNote: 'com(一起)+pet(寻求)，竞争', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'complain': { prefix: 'com', prefixMeaning: '加强', prefixMeaningEn: 'intensive', root: 'plain', rootMeaning: '抱怨', rootMeaningEn: 'complain', rootOrigin: '拉丁语', rootOriginNote: 'com(加强)+plain(抱怨)，抱怨', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'complete': { prefix: 'com', prefixMeaning: '加强', prefixMeaningEn: 'intensive', root: 'plet', rootMeaning: '填充', rootMeaningEn: 'fill', rootOrigin: '拉丁语', rootOriginNote: 'com(加强)+plet(填充)，完整的', suffix: '-e', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix' },
    'complex': { prefix: 'com', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'plex', rootMeaning: '编织', rootMeaningEn: 'weave', rootOrigin: '拉丁语', rootOriginNote: 'com(一起)+plex(编织)，复杂的', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'compose': { prefix: 'com', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'pos', rootMeaning: '放置', rootMeaningEn: 'place', rootOrigin: '拉丁语', rootOriginNote: 'com(一起)+pos(放置)，作曲', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'computer': { prefix: 'compute', prefixMeaning: '计算', prefixMeaningEn: 'compute', root: 'er', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix', rootOrigin: '拉丁语', rootOriginNote: 'compute(计算)+-er(名词后缀)，计算机', suffix: '-er', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'concentrate': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'centr', rootMeaning: '中心', rootMeaningEn: 'center', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+centr(中心)，集中', suffix: '-ate', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'concept': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'cept', rootMeaning: '拿', rootMeaningEn: 'take', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+cept(拿)，概念', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'concern': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'cern', rootMeaning: '区分', rootMeaningEn: 'distinguish', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+cern(区分)，关心', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'conclude': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'clud', rootMeaning: '关闭', rootMeaningEn: 'close', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+clud(关闭)，结束', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'concrete': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'cret', rootMeaning: '生长', rootMeaningEn: 'grow', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+cret(生长)，具体的', suffix: '-e', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix' },
    'condition': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'dit', rootMeaning: '说', rootMeaningEn: 'say', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+dit(说)，条件', suffix: '-ion', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'conduct': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'duct', rootMeaning: '引导', rootMeaningEn: 'lead', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+duct(引导)，行为', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'confer': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'fer', rootMeaning: '带来', rootMeaningEn: 'bring', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+fer(带来)，协商', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'confess': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'fess', rootMeaning: '说', rootMeaningEn: 'speak', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+fess(说)，承认', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'confidence': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'fid', rootMeaning: '信任', rootMeaningEn: 'trust', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+fid(信任)，信心', suffix: '-ence', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'confirm': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'firm', rootMeaning: '坚固', rootMeaningEn: 'firm', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+firm(坚固)，确认', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'conflict': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'flict', rootMeaning: '打击', rootMeaningEn: 'strike', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+flict(打击)，冲突', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'confuse': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'fus', rootMeaning: '倾倒', rootMeaningEn: 'pour', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+fus(倾倒)，使困惑', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'congratulate': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'gratul', rootMeaning: '高兴', rootMeaningEn: 'please', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+gratul(高兴)，祝贺', suffix: '-ate', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'congress': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'gress', rootMeaning: '走', rootMeaningEn: 'go', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+gress(走)，国会', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'connect': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'nect', rootMeaning: '绑', rootMeaningEn: 'bind', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+nect(绑)，连接', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'conquer': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'quer', rootMeaning: '寻求', rootMeaningEn: 'seek', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+quer(寻求)，征服', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'conscious': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'sci', rootMeaning: '知道', rootMeaningEn: 'know', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+sci(知道)，有意识的', suffix: '-ous', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix' },
    'consensus': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'sens', rootMeaning: '感觉', rootMeaningEn: 'feel', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+sens(感觉)，共识', suffix: '-us', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'consent': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'sent', rootMeaning: '感觉', rootMeaningEn: 'feel', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+sent(感觉)，同意', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'consequence': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'sequ', rootMeaning: '跟随', rootMeaningEn: 'follow', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+sequ(跟随)，结果', suffix: '-ence', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'conservation': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'serv', rootMeaning: '保持', rootMeaningEn: 'keep', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+serv(保持)，保护', suffix: '-ation', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'consider': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'sider', rootMeaning: '星星', rootMeaningEn: 'star', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+sider(星星)，考虑', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'consist': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'sist', rootMeaning: '站立', rootMeaningEn: 'stand', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+sist(站立)，组成', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'constant': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'stant', rootMeaning: '站立', rootMeaningEn: 'stand', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+stant(站立)，不断的', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'constitute': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'stitut', rootMeaning: '站立', rootMeaningEn: 'stand', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+stitut(站立)，组成', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'construct': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'struct', rootMeaning: '建造', rootMeaningEn: 'build', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+struct(建造)，建造', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'consult': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'sult', rootMeaning: '跳跃', rootMeaningEn: 'leap', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+sult(跳跃)，咨询', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'consume': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'sum', rootMeaning: '拿', rootMeaningEn: 'take', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+sum(拿)，消耗', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'contact': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'tact', rootMeaning: '接触', rootMeaningEn: 'touch', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+tact(接触)，联系', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'contain': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'tain', rootMeaning: '持有', rootMeaningEn: 'hold', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+tain(持有)，包含', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'contemporary': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'tempor', rootMeaning: '时间', rootMeaningEn: 'time', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+tempor(时间)，当代的', suffix: '-ary', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix' },
    'content': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'tent', rootMeaning: '持有', rootMeaningEn: 'hold', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+tent(持有)，内容', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'contest': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'test', rootMeaning: '证明', rootMeaningEn: 'prove', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+test(证明)，比赛', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'context': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'text', rootMeaning: '编织', rootMeaningEn: 'weave', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+text(编织)，语境', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'continue': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'tin', rootMeaning: '持有', rootMeaningEn: 'hold', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+tin(持有)，继续', suffix: '-ue', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'contract': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'tract', rootMeaning: '拉', rootMeaningEn: 'pull', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+tract(拉)，合同', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'contradict': { prefix: 'contra', prefixMeaning: '相反', prefixMeaningEn: 'against', root: 'dict', rootMeaning: '说', rootMeaningEn: 'say', rootOrigin: '拉丁语', rootOriginNote: 'contra(相反)+dict(说)，反驳', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'contrast': { prefix: 'contra', prefixMeaning: '相反', prefixMeaningEn: 'against', root: 'st', rootMeaning: '站立', rootMeaningEn: 'stand', rootOrigin: '拉丁语', rootOriginNote: 'contra(相反)+st(站立)，对比', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'contribute': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'tribut', rootMeaning: '给予', rootMeaningEn: 'give', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+tribut(给予)，贡献', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'control': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'trol', rootMeaning: '滚动', rootMeaningEn: 'roll', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+trol(滚动)，控制', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'convenient': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'ven', rootMeaning: '来', rootMeaningEn: 'come', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+ven(来)，方便的', suffix: '-ent', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix' },
    'convention': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'vent', rootMeaning: '来', rootMeaningEn: 'come', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+vent(来)，会议', suffix: '-ion', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'converse': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'vers', rootMeaning: '转', rootMeaningEn: 'turn', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+vers(转)，交谈', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'convert': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'vert', rootMeaning: '转', rootMeaningEn: 'turn', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+vert(转)，转换', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'convey': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'vey', rootMeaning: '路', rootMeaningEn: 'way', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+vey(路)，传达', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'convince': { prefix: 'con', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'vinc', rootMeaning: '征服', rootMeaningEn: 'conquer', rootOrigin: '拉丁语', rootOriginNote: 'con(一起)+vinc(征服)，说服', suffix: '-e', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'cooperate': { prefix: 'co', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'oper', rootMeaning: '工作', rootMeaningEn: 'work', rootOrigin: '拉丁语', rootOriginNote: 'co(一起)+oper(工作)，合作', suffix: '-ate', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'coordinate': { prefix: 'co', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'ordin', rootMeaning: '秩序', rootMeaningEn: 'order', rootOrigin: '拉丁语', rootOriginNote: 'co(一起)+ordin(秩序)，协调', suffix: '-ate', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'cope': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cope', rootMeaning: '应对', rootMeaningEn: 'cope', rootOrigin: '古法语', rootOriginNote: '源自古法语couper，意为应对', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'copy': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'copy', rootMeaning: '复制', rootMeaningEn: 'copy', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语copia，意为复制', suffix: '-y', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'core': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'core', rootMeaning: '核心', rootMeaningEn: 'core', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语cor，意为心', suffix: '-e', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'corn': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'corn', rootMeaning: '玉米', rootMeaningEn: 'corn', rootOrigin: '古英语', rootOriginNote: '源自古英语corn，意为谷物', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'corner': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'corn', rootMeaning: '角', rootMeaningEn: 'corner', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语cornu，意为角', suffix: '-er', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'corporate': { prefix: 'corpor', prefixMeaning: '身体', prefixMeaningEn: 'body', root: 'ate', rootMeaning: '形容词后缀', rootMeaningEn: 'adj suffix', rootOrigin: '拉丁语', rootOriginNote: 'corpor(身体)+-ate(形容词后缀)，公司的', suffix: '-ate', suffixMeaning: '形容词后缀', suffixMeaningEn: 'adj suffix' },
    'corporation': { prefix: 'corpor', prefixMeaning: '身体', prefixMeaningEn: 'body', root: 'ation', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix', rootOrigin: '拉丁语', rootOriginNote: 'corpor(身体)+-ation(名词后缀)，公司', suffix: '-ation', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'correct': { prefix: 'cor', prefixMeaning: '加强', prefixMeaningEn: 'intensive', root: 'rect', rootMeaning: '直', rootMeaningEn: 'straight', rootOrigin: '拉丁语', rootOriginNote: 'cor(加强)+rect(直)，正确的', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'correspond': { prefix: 'cor', prefixMeaning: '一起', prefixMeaningEn: 'together', root: 'respond', rootMeaning: '回答', rootMeaningEn: 'answer', rootOrigin: '拉丁语', rootOriginNote: 'cor(一起)+respond(回答)，对应', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'corrupt': { prefix: 'cor', prefixMeaning: '加强', prefixMeaningEn: 'intensive', root: 'rupt', rootMeaning: '破裂', rootMeaningEn: 'break', rootOrigin: '拉丁语', rootOriginNote: 'cor(加强)+rupt(破裂)，腐败的', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'cost': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cost', rootMeaning: '成本', rootMeaningEn: 'cost', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语constare，意为成本', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'costume': { prefix: 'cost', prefixMeaning: '习惯', prefixMeaningEn: 'custom', root: 'ume', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix', rootOrigin: '拉丁语', rootOriginNote: 'cost(习惯)+-ume(名词后缀)，服装', suffix: '-ume', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'cottage': { prefix: 'cot', prefixMeaning: '小屋', prefixMeaningEn: 'cottage', root: 'age', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix', rootOrigin: '古英语', rootOriginNote: 'cot(小屋)+-age(名词后缀)，小屋', suffix: '-age', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'cotton': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cotton', rootMeaning: '棉花', rootMeaningEn: 'cotton', rootOrigin: '阿拉伯语', rootOriginNote: '源自阿拉伯语qutn，意为棉花', suffix: '-on', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'couch': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'couch', rootMeaning: '沙发', rootMeaningEn: 'couch', rootOrigin: '古法语', rootOriginNote: '源自古法语couche，意为沙发', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'cough': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cough', rootMeaning: '咳嗽', rootMeaningEn: 'cough', rootOrigin: '古英语', rootOriginNote: '源自古英语cohhian，意为咳嗽', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'could': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'could', rootMeaning: '能', rootMeaningEn: 'could', rootOrigin: '古英语', rootOriginNote: '源自古英语cuþe，意为能', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'count': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'count', rootMeaning: '计数', rootMeaningEn: 'count', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语computare，意为计数', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'counter': { prefix: 'count', prefixMeaning: '计数', prefixMeaningEn: 'count', root: 'er', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix', rootOrigin: '拉丁语', rootOriginNote: 'count(计数)+-er(名词后缀)，柜台', suffix: '-er', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'country': { prefix: 'count', prefixMeaning: '地区', prefixMeaningEn: 'region', root: 'ry', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix', rootOrigin: '拉丁语', rootOriginNote: 'count(地区)+-ry(名词后缀)，国家', suffix: '-ry', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'countryside': { prefix: 'country', prefixMeaning: '国家', prefixMeaningEn: 'country', root: 'side', rootMeaning: '边', rootMeaningEn: 'side', rootOrigin: '英语', rootOriginNote: 'country(国家)+side(边)，乡村', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'county': { prefix: 'count', prefixMeaning: '地区', prefixMeaningEn: 'region', root: 'y', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix', rootOrigin: '拉丁语', rootOriginNote: 'count(地区)+-y(名词后缀)，县', suffix: '-y', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'couple': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'couple', rootMeaning: '一对', rootMeaningEn: 'couple', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语copula，意为连接', suffix: '-le', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'coupon': { prefix: 'coup', prefixMeaning: '切', prefixMeaningEn: 'cut', root: 'on', rootMeaning: '名词后缀', rootMeaningEn: 'noun suffix', rootOrigin: '法语', rootOriginNote: 'coup(切)+-on(名词后缀)，优惠券', suffix: '-on', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'court': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'court', rootMeaning: '法庭', rootMeaningEn: 'court', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语cohors，意为法庭', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'courtyard': { prefix: 'court', prefixMeaning: '法庭', prefixMeaningEn: 'court', root: 'yard', rootMeaning: '院子', rootMeaningEn: 'yard', rootOrigin: '英语', rootOriginNote: 'court(法庭)+yard(院子)，庭院', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'cousin': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cousin', rootMeaning: '表亲', rootMeaningEn: 'cousin', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语consobrinus，意为表亲', suffix: '-in', suffixMeaning: '名词后缀', suffixMeaningEn: 'noun suffix' },
    'cover': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cover', rootMeaning: '覆盖', rootMeaningEn: 'cover', rootOrigin: '拉丁语', rootOriginNote: '源自拉丁语cooperire，意为覆盖', suffix: '-er', suffixMeaning: '动词后缀', suffixMeaningEn: 'verb suffix' },
    'cow': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'cow', rootMeaning: '牛', rootMeaningEn: 'cow', rootOrigin: '古英语', rootOriginNote: '源自古英语cu，意为牛', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'crack': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crack', rootMeaning: '裂缝', rootMeaningEn: 'crack', rootOrigin: '古英语', rootOriginNote: '源自古英语cracian，意为破裂', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'craft': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'craft', rootMeaning: '工艺', rootMeaningEn: 'craft', rootOrigin: '古英语', rootOriginNote: '源自古英语craeft，意为工艺', suffix: '', suffixMeaning: '', suffixMeaningEn: '' },
    'crash': { prefix: '', prefixMeaning: '', prefixMeaningEn: '', root: 'crash', rootMeaning: '碰撞', rootMeaningEn: 'crash', rootOrigin: '古英语', rootOriginNote: '源自古英语crasian，意为碰撞', suffix: '', suffixMeaning: '', suffixMeaningEn: '' }
};
let updated = 0;
words.forEach(w => {
    const wordLower = w.word.toLowerCase();
    if (coWordData[wordLower]) {
        const d = coWordData[wordLower];
        w.prefix = d.prefix;
        w.prefixMeaning = d.prefixMeaning;
        w.prefixMeaningEn = d.prefixMeaningEn;
        w.root = d.root;
        w.rootMeaning = d.rootMeaning;
        w.rootMeaningEn = d.rootMeaningEn;
        w.rootOrigin = d.rootOrigin;
        w.rootOriginNote = d.rootOriginNote;
        w.suffix = d.suffix;
        w.suffixMeaning = d.suffixMeaning;
        w.suffixMeaningEn = d.suffixMeaningEn;
        updated++;
    }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Updated ' + updated + ' CO words!');
