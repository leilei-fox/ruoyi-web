<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="数据库名" prop="schema">
        <el-input
          v-model="queryParams.schema"
          placeholder="请输入数据库名"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="表名" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入表名"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="数据表状态" prop="state">
        <el-select
          v-model="queryParams.state"
          placeholder="请选择数据表状态"
          clearable
          size="small"
          style="width: 240px"
        >
          <el-option
            v-for="dict in statusOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['metadata:tableInfo:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['metadata:tableInfo:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['metadata:tableInfo:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
		  :loading="exportLoading"
          @click="handleExport"
          v-hasPermi="['metadata:tableInfo:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="tableInfoList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="数据库类型" align="center" prop="dbType" />
      <el-table-column label="数据库名" align="center" prop="schema" />
      <el-table-column label="表名" align="center" prop="name" />
      <el-table-column label="表注释" align="center" prop="comment" />
      <el-table-column label="备注" align="center" prop="remark" />
      <el-table-column label="表类型" align="center" prop="tableType" />
      <el-table-column label="数据表状态" align="center" prop="state" />

      <el-table-column label="数据表状态" align="center" prop="state">
        <template slot-scope="scope">
          <dict-tag :options="statusOptions" :value="scope.row.state + ''"/>
        </template>
      </el-table-column>


      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['metadata:tableInfo:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['metadata:tableInfo:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改表信息管理对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="数据库类型" prop="dbType">
          <el-select v-model="form.dbType" placeholder="请选择数据库类型">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="数据库名" prop="schema">
          <el-input v-model="form.schema" placeholder="请输入数据库名" />
        </el-form-item>
        <el-form-item label="表名" prop="name">
          <el-input v-model="form.name" placeholder="请输入表名" />
        </el-form-item>
        <el-form-item label="表注释" prop="comment">
          <el-input v-model="form.comment" placeholder="请输入表注释" />
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" placeholder="请输入备注" />
        </el-form-item>
        <el-form-item label="表类型" prop="tableType">
          <el-select v-model="form.tableType" placeholder="请选择表类型">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="数据表状态" prop="state">
          <el-input v-model="form.state" placeholder="请输入数据表状态" />
        </el-form-item>
        <el-form-item label="分区类型/分隔类型" prop="partitionType">
          <el-select v-model="form.partitionType" placeholder="请选择分区类型/分隔类型">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="分区数量" prop="partitionNum">
          <el-input v-model="form.partitionNum" placeholder="请输入分区数量" />
        </el-form-item>
        <el-form-item label="分区数量" prop="isSync">
          <el-input v-model="form.isSync" placeholder="请输入分区数量" />
        </el-form-item>
        <el-form-item label="分区数量" prop="isValid">
          <el-input v-model="form.isValid" placeholder="请输入分区数量" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listTableInfo, getTableInfo, delTableInfo, addTableInfo, updateTableInfo, exportTableInfo } from "@/api/metadata/tableInfo";

export default {
  name: "TableInfo",
  components: {
  },
  data() {
    return {
      // 遮罩层
      loading: true,
      // 导出遮罩层
      exportLoading: false,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 表信息管理表格数据
      tableInfoList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        dbType: null,
        schema: null,
        name: null,
        comment: null,
        tableType: null,
        state: null,
        partitionType: null,
        partitionNum: null,
        isSync: null,
        isValid: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      },
      statusOptions:[]
    };
  },
  created() {
    this.getList();
    this.getDicts("metadata_tableInfo_state").then(response => {
      this.statusOptions = response.data;
    });
  },
  methods: {
    /** 查询表信息管理列表 */
    getList() {
      this.loading = true;
      listTableInfo(this.queryParams).then(response => {
        this.tableInfoList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        dbType: null,
        schema: null,
        name: null,
        comment: null,
        remark: null,
        tableType: null,
        state: null,
        partitionType: null,
        partitionNum: null,
        createTime: null,
        updateTime: null,
        isSync: null,
        isValid: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加表信息管理";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getTableInfo(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改表信息管理";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateTableInfo(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addTableInfo(this.form).then(response => {
              this.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });``
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$confirm('是否确认删除表信息管理编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delTableInfo(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有表信息管理数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.exportLoading = true;
          return exportTableInfo(queryParams);
        }).then(response => {
          this.download(response.msg);
          this.exportLoading = false;
        }).catch(() => {});
    }
  }
};
</script>
