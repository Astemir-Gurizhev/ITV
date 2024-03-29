// Задание 1

    function buildTree(flatArray, parentId = null) {
        const tree = [];
        
        flatArray.forEach(item => {
            if (item.parent_id === parentId) {
                const children = buildTree(flatArray, item.id);
                if (children.length) {
                    item.childs = children;
                }
                tree.push(item);
            }
        });
        
        return tree;
    }

    // Пример данных
    const flatArray = [
        { id: 1, parent_id: null },
        { id: 2, parent_id: 1 },
        { id: 3, parent_id: 1 },
        { id: 4, parent_id: 2 },
        { id: 5, parent_id: 3 },
        { id: 6, parent_id: 3 },
        { id: 7, parent_id: 5 }
    ];


    console.log(buildTree(flatArray));


// Задание 2

    function numberToExcelColumn(number) {
        let column = '';
        while (number > 0) {
            let remainder = (number - 1) % 26;
            column = String.fromCharCode(65 + remainder) + column;
            number = Math.floor((number - remainder) / 26);
        }
        return column;
    }

    // Примеры использования
    console.log("1 => " + numberToExcelColumn(1));  // Вывод: A
    console.log("2 => " + numberToExcelColumn(2));  // Вывод: B
    console.log("27 => " + numberToExcelColumn(27)); // Вывод: AA
    console.log("28 => " + numberToExcelColumn(28)); // Вывод: AB