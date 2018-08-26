// @Flow
class ObjectUtils {
    // ne pas oublier de typer avec flow
    objectUpdater(object: Object, newProperties: Array): Object {
        let newObject = object;
        newProperties.forEach(item => {
            newObject = {
                ...newObject,
                ...item,
            }
        });
        return newObject;
    }
}

const objectUtils = new ObjectUtils();
export default objectUtils;